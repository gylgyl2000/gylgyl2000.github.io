const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json';
const margin = {
  top: 50,
  right: 80,
  bottom: 50,
  left: 80 }

let width = 1200 - margin.left - margin.right;
let height = 650 - margin.top - margin.bottom;

let x = d3.scaleLinear().range([0, width]);

let y = d3.scaleTime().range([0, height]);

let color = d3.scaleOrdinal(d3.schemeCategory10);

let timeFormat = d3.timeFormat('%M:%S');
let xAxis = d3.axisBottom(x).tickFormat(d3.format('d'));

let yAxis = d3.axisLeft(y).tickFormat(timeFormat);

// Définition du div pour le tooltip
let div = d3.select('body')
  .append('div')
  .attr('class', 'tooltip')
  .attr('id', 'tooltip')
  .style('opacity', 0);

let svg = d3.select('body')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .attr('class', 'graph')
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.json(url, function (error, data) {
  if (error) {
    throw error;
  }
  data.forEach(function (d) {
    d.Place = +d.Place;
    let parsedTime = d.Time.split(':');
    d.Time = new Date(Date.UTC(1970, 0, 1, 0, parsedTime[0], parsedTime[1]));
  });

  x.domain([
  d3.min(data, function (d) {
    return d.Year - 1;
  }),
  d3.max(data, function (d) {
    return d.Year + 1;
  })]);

  y.domain(
  d3.extent(data, function (d) {
    return d.Time;
  }));

  svg.append('g')
    .attr('class', 'x axis')
    .attr('id', 'x-axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
    .append('text')
    .attr('class', 'x-axis-label')
    .attr('x', width)
    .attr('y', -6)
    .style('text-anchor', 'end')
    .style('fill', '#fff')
    .text('Année');

  svg.append('g')
    .attr('class', 'y axis')
    .attr('id', 'y-axis')
    .call(yAxis)
    .append('text')
    .attr('class', 'label')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .style('fill', '#fff')
    .text('Meilleur temps (minutes)');

  svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -160)
    .attr('y', -44)
    .style('font-size', 18)
    .style('fill', '#fff')
    .text('Temps en minutes');

  svg.selectAll('.dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('r', 10)
    .attr('cx', function (d) {
      return x(d.Year);
    })
    .attr('cy', function (d) {
      return y(d.Time);
    })
    .attr('data-xvalue', function (d) {
      return d.Year;
    })
    .attr('data-yvalue', function (d) {
      return d.Time.toISOString();
    })
    .style('fill', function (d) {
    return color(d.Doping !== '');
    })
    .on('mouseover', function (d) {
      div.style('opacity', 0.9);
      div.attr('data-year', d.Year);
      div.html(
        d.Name +
        ': ' +
        d.Nationality +
        '<br/>' +
        'Year: ' +
        d.Year +
        ', Time: ' +
        timeFormat(d.Time) +
        (d.Doping ?
          '<br/><br/>' + d.Doping :
          ''))
        .style('left', d3.event.pageX + 'px')
        .style('top', d3.event.pageY - 28 + 'px');
    })
    .on('mouseout', function () {
      div.style('opacity', 0);
    });

  // titre
  // svg.append('text')
  //   .attr('id', 'title')
  //   .attr('x', width / 2)
  //   .attr('y', 0 - margin.top / 2)
  //   .attr('text-anchor', 'middle')
  //   .style('font-size', '30px')
  //   .text('Dopage dans les courses cyclistes professionnelles');

  // soustitre
  // svg.append('text')
  //   .attr('x', width / 2)
  //   .attr('y', 0 - margin.top / 2 + 25)
  //   .attr('text-anchor', 'middle')
  //   .style('font-size', '20px')
  //   .text("Les 35 temps les plus rapides à l'Alpe d'Huez");

  let legendContainer = svg.append('g').attr('id', 'legend');

  let legend = legendContainer.selectAll('#legend')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'legend-label')
    .attr('transform', function (d, i) {
      return 'translate(0,' + (height / 2 - i * 30) + ')';
    });

  legend.append('rect')
    .attr('x', width - 9)
    .attr('width', 18)
    .attr('height', 18)
    .style('fill', color);

  legend.append('text')
    .attr('x', width - 24)
    .attr('y', 9)
    .attr('dy', '.35em')
    .style('text-anchor', 'end')
    .text(function (d) {
      if (d) {
        return 'Coureurs ayant des allégations de dopage';
      } else {
        return 'Aucune allégation de dopage';
      }
    })
    .style('fill', '#fff');
});