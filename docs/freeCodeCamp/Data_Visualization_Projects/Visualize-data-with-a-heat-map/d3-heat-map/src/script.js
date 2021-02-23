const projectName = 'Carte thermique';

const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json';

let colorbrewer = {
  RdBu: {
    11: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061']
  }
};

d3.json(url, callback);

function callback(error, data) {
  console.log('data: ', data);
  if (!error) {
    data.monthlyVariance.forEach(function (val) {
      val.month -= 1;
    });

    var section = d3.select('body')
      .append('section')
      .attr('class', 'main');

    let fontSize = 16;
    let width = 5 * Math.ceil(data.monthlyVariance.length / 12);
    let height = 33 * 12;
    let padding = {
      left: 9 * fontSize,
      right: 1 * fontSize,
      top: 1 * fontSize,
      bottom: 8 * fontSize };

    let tip = d3.tip()
      .attr('class', 'd3-tip')
      .attr('id', 'tooltip')
      .html((d) => d)
      .direction('n')
      .offset([-10, 0]);

    let svg = section.append('svg')
      .attr({
        width: width + padding.left + padding.right,
        height: height + padding.top + padding.bottom }).

    call(tip);

    let yScale = d3.scale.ordinal()
      .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
      .rangeRoundBands([0, height], 0, 0);
    let yAxis = d3.svg.axis()
      .scale(yScale)
      .tickValues(yScale.domain())
      .tickFormat(function (month) {
        let date = new Date(0);
        date.setUTCMonth(month);
        return d3.time.format.utc('%B')(date)
          .replace('January', 'Janvier')
          .replace('February', 'Février')
          .replace('March', 'Mars')
          .replace('April', 'Avril')
          .replace('May', 'Mai')
          .replace('June', 'Juin')
          .replace('July', 'Juillet')
          .replace('August', 'Août')
          .replace('September', 'Septembre')
          .replace('October', 'Octobre')
          .replace('November', 'Novembre')
          .replace('December', 'Décembre');
      })
      .orient('left')
      .tickSize(10, 1);

    svg.append('g')
      .classed('y-axis', true)
      .attr('id', 'y-axis')
      .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
      .call(yAxis)
      .append('text')
      .text('Mois')
      .style('text-anchor', 'middle')
      .attr('transform', 'translate(' + -7 * fontSize + ',' + height / 2 + ')' + 'rotate(-90)');

    let xScale = d3.scale.ordinal()
      .domain(
        data.monthlyVariance.map(function (val) {
          return val.year;
        })
      )
      .rangeRoundBands([0, width], 0, 0);
    let xAxis = d3.svg.axis()
      .scale(xScale)
      .tickValues(
        xScale.domain().filter(function (year) {
          return year % 10 === 0;
        })
      )
      .tickFormat(function (year) {
        let date = new Date(0);
        date.setUTCFullYear(year);
        return d3.time.format.utc('%Y')(date);
      })
      .orient('bottom')
      .tickSize(10, 1);

    svg.append('g')
      .classed('x-axis', true)
      .attr('id', 'x-axis')
      .attr('transform', 'translate(' + padding.left + ',' + (height + padding.top) + ')')
      .call(xAxis)
      .append('text')
      .text('Années')
      .style('text-anchor', 'middle')
      .attr('transform', 'translate(' + width / 2 + ',' + 3 * fontSize + ')');

    let legendColors = colorbrewer.RdBu[11].reverse();
    let legendWidth = 400;
    let legendHeight = 300 / legendColors.length;

    let variance = data.monthlyVariance.map(function (val) {
      return val.variance;
    });
    let minTemp = data.baseTemperature + Math.min.apply(null, variance);
    let maxTemp = data.baseTemperature + Math.max.apply(null, variance);

    let legendThreshold = d3.scale.threshold()
      .domain(
        function (min, max, count) {
          let array = [];
          let step = (max - min) / count;
          let base = min;
          for (let i = 1; i < count; i++) {
            array.push(base + i * step);
        }
        return array;
        }(minTemp, maxTemp, legendColors.length))
      .range(legendColors);

    let legendX = d3.scale.linear()
      .domain([minTemp, maxTemp])
      .range([0, legendWidth]);

    let legendXAxis = d3.svg.axis()
      .scale(legendX)
      .orient('bottom')
      .tickSize(10, 0)
      .tickValues(legendThreshold.domain())
      .tickFormat(d3.format('.1f'));

    let legend = svg.append('g')
      .classed('legend', true)
      .attr('id', 'legend')
      .attr('transform', 'translate(' + padding.left + ',' + (padding.top + height + padding.bottom - 2 * legendHeight) + ')');

    legend.append('g')
      .selectAll('rect')
      .data(legendThreshold.range().map(function (color) {
        let d = legendThreshold.invertExtent(color);
        if (d[0] === null) {
          d[0] = legendX.domain()[0];
        }
        if (d[1] === null) {
          d[1] = legendX.domain()[1];
        }
        return d;
      }))
      .enter()
      .append('rect')
      .style('fill', function (d) {
        return legendThreshold(d[0]);
      })
      .attr({
        x: function (d) {
          return legendX(d[0]);
        },
        y: 0,
        width: function (d) {
          return legendX(d[1]) - legendX(d[0]);
        },
        height: legendHeight
      });

    legend.append('g')
      .attr('transform', 'translate(' + 0 + ',' + legendHeight + ')')
      .call(legendXAxis);

    svg.append('g')
      .classed('map', true)
      .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
      .selectAll('rect')
      .data(data.monthlyVariance)
      .enter()
      .append('rect')
      .attr('class', 'cell')
      .attr('data-month', function (d) {
        return d.month;
      })
      .attr('data-year', function (d) {
        return d.year;
      })
      .attr('data-temp', function (d) {
        return data.baseTemperature + d.variance;
      })
      .attr({
        x: function (d) {
          return xScale(d.year);
        },
        y: function (d) {
          return yScale(d.month);
        },
        width: function (d) {
          return xScale.rangeBand(d.year);
        },
        height: function (d) {
          return yScale.rangeBand(d.month);
        }
      })
      .attr('fill', function (d) {
        return legendThreshold(data.baseTemperature + d.variance);
      })
      .on('mouseover', function (d) {
        let date = new Date(d.year, d.month);
        let str =
        "<span class='date'>" +
        d3.time.format('%B %Y')(date).replace('January', 'Janvier')
        .replace('February', 'Février')
        .replace('March', 'Mars')
        .replace('April', 'Avril')
        .replace('May', 'Mai')
        .replace('June', 'Juin')
        .replace('July', 'Juillet')
        .replace('August', 'Août')
        .replace('September', 'Septembre')
        .replace('October', 'Octobre')
        .replace('November', 'Novembre')
        .replace('December', 'Décembre') +
        '</span>' +
        '<br />' +
        "<span class='temperature'>" +
        d3.format('.1f')(data.baseTemperature + d.variance) +
        '&#8451;' +
        '</span>' +
        '<br />' +
        "<span class='variance'>" +
        d3.format('+.1f')(d.variance) +
        '&#8451;' +
        '</span>';
      tip.attr('data-year', d.year);
      tip.show(str);
      })
      .on('mouseout', tip.hide);
  } else {
    console.log('Error loading data from server.');
  }
}