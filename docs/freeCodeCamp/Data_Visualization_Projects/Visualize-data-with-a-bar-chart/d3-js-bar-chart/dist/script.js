let chartBarData = [];
let minDate;
let maxDate;

let months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(error, data) {
  if (error) return console.warn(error);

  for (let x = 0; x < data.data.length; x++) {
    chartBarData.push(data.data[x][1]);
  }
  minDate = new Date(data.from_date);
  maxDate = new Date(data.to_date);

  let margin = {
    top: 30,
    right: 30,
    bottom: 40,
    left: 80
  };

  let height = 600 - margin.top - margin.bottom,
    width = 1200 - margin.left - margin.right,
    barWidth = 60,
    barOffset = 1;

  let tempColor;

  let colors = d3.scale.linear()
    .domain([
      0,
      chartBarData.length * 0.33,
      chartBarData.length * 0.66,
      chartBarData.length
    ])
    .range([
      '#ff5733', // '#A57706',
      '#c70039', //'#96F751',
      '#900c3f', // '#893168',
      '#511845', // '#F15152',
    ]);

  let yScale = d3.scale.linear()
    .domain([0, d3.max(chartBarData)])
    .range([0, height]);

  let xScaleTime= d3.time.scale()
    .domain([minDate, maxDate])
    .range([0, width]);

  let xScale = d3.scale.ordinal()
    .domain(d3.range(0, chartBarData.length))
    .rangeBands([0, width], -0.1);

  let tooltip = d3.select('body').append('div')
    .attr('id', 'tooltip')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0);

  d3.select('#header')
    .attr('id', 'title')
    .html("Produit intérieur brut des États-Unis de 1947 à 2015");
  let myChart = d3.select('#chart')
    .append('svg')
    .style('background', '#1f4068')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
    .selectAll('rect')
    .data(chartBarData)
    .enter()
    .append('rect')
    .attr('data-date', (d, i) => data.data[i][0])
    .attr('data-gdp', (d, i) => data.data[i][1])
    .attr('class', 'bar')
    .style('fill', function(d, i) {
      return colors(i);
    })
    .attr('width', xScale.rangeBand())
    .attr('x', function(d, i) {
      return xScale(i);
    })
    .attr('height', 0)
    .attr('y', height)
    .on('mouseover', function(d, i) {
      tooltip.transition()
        .style('background','#242423')
        .style('color','#D16129')
        .style('opacity', 0.9);

      tooltip.html(function(){
        let date = new Date(data.data[chartBarData.indexOf(d)][0]);
        let html = "<strong>"+d.toFixed(2)+" milliards de $</strong><br />" + months[date.getUTCMonth()] +" "+ date.getUTCFullYear();
          return html;
      })
        .style('left', (d3.event.pageX + 0) + 'px')
        .style('top', (d3.event.pageY - 70) + 'px');

      tempColor = this.style.fill;
      d3.select(this)
        .style('opacity', 0.2)
        .style('fill', '#2176C7')
        .classed({
        });
    })
    .on('mouseout', function(d) {
      tooltip.transition()
        .style('opacity', 0.0);

      d3.select(this)
        .style('opacity', 1)
        .style('fill', tempColor)
        .classed({
        });
    });

  myChart.transition()
    .attr('height', function(d) {
      return yScale(d);
    })
    .attr('y', function(d) {
      return height - yScale(d);
    })
    .delay(function(d, i) {
      return i * 3;
    })
    .duration(1000)
    .ease('elastic');

  let vGuideScale = d3.scale.linear()
    .domain([0, d3.max(chartBarData)])
    .range([height, 0]);

  let vAxis = d3.svg.axis()
    .scale(vGuideScale)
    .orient('left')
    .ticks(10);

  let vGuide = d3.select('svg').append('g').attr('id', 'y-axis');
  vAxis(vGuide);
  vGuide.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
  vGuide.selectAll('path')
    .style({
      fill: 'none',
      stroke: "#000"
    });
  vGuide.selectAll('line')
    .style({
      stroke: "#000"
    });

  let hAxis = d3.svg.axis()
    .scale(xScaleTime)
    .orient("bottom")
    .ticks(d3.time.years, 5);

  let hGuide = d3.select('svg').append('g').attr('id', 'x-axis');
  hAxis(hGuide);
  hGuide.attr('transform', 'translate(' + margin.left + ', ' + (height + margin.top) + ')');
  hGuide.selectAll('path')
    .style({
      fill: 'none',
      stroke: "#000"
    });
  hGuide.selectAll('line')
    .style({
      stroke: "#000"
    });
  let description = data.description.split(" ");
  let url = description.pop();
  description.pop();
  console.log(url);
  d3.select('#chart').append('div')
    .classed('footer','true')
    .html("<h4>Source : <a href = "+url.substring(1,(url.length-1))+" target='_blank'>"+data.source_name+"</h4></a>");

  d3.selectAll('text')
    .classed('myclass',true);
});