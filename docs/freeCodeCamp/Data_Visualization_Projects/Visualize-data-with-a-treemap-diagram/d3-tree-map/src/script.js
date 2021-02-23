const datasets = {
  videogames: {
    title: 'Ventes de jeux vidéo',
    description: 'Top 100 des jeux vidéo les plus vendus regroupés par plateforme',
    data_path:'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json'
  },
  movies: {
    title: 'Ventes de films',
    description: 'Top 100 des films les plus rentables regroupés par genre',
    data_path:'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json'
  },
  kickstarter: {
    title: 'Promesses de dons sur Kickstarter',
    description:'Top 100 des campagnes de dons Kickstarter les plus importantes regroupées par catégorie',
    data_path:'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json'
  }
};

let urlParams = new URLSearchParams(window.location.search);
const default_dataset = 'videogames';
const dataset = datasets[urlParams.get('data') || default_dataset];

document.getElementById('title').innerHTML = dataset.title;
document.getElementById('description').innerHTML = dataset.description;

let body = d3.select('body');

let tooltip = body.append('div')
  .attr('class', 'tooltip')
  .attr('id', 'tooltip')
  .style('opacity', 0);

let svg = d3.select('#tree-map'),
width = +svg.attr('width'),
height = +svg.attr('height');

let fader = function (color) {
  return d3.interpolateRgb(color, '#fff')(0.2);
},
color = d3.scaleOrdinal(d3.schemeCategory20.map(fader));

let treemap = d3.treemap().size([width, height]).paddingInner(1);

function sumBySize(d) {
  return d.value;
}

d3.json(dataset.data_path, function (error, data) {
  if (error) {
    throw error;
  }

  let root = d3.hierarchy(data)
    .eachBefore((d) => d.data.id = (d.parent ? d.parent.data.id + '.' : '') + d.data.name)
    .sum(sumBySize)
    .sort((a, b) => b.height - a.height || b.value - a.value);

  treemap(root);

  let cell = svg.selectAll('g')
    .data(root.leaves())
    .enter()
    .append('g')
    .attr('class', 'group')
    .attr('transform', (d) => 'translate(' + d.x0 + ',' + d.y0 + ')');

  cell.append('rect')
    .attr('id', (d) => d.data.id)
    .attr('class', 'tile')
    .attr('width', (d) => d.x1 - d.x0)
    .attr('height', (d) => d.y1 - d.y0)
    .attr('data-name', (d) => d.data.name)
    .attr('data-category', (d) => d.data.category)
    .attr('data-value', (d) => d.data.value)
    .attr('fill', (d) => color(d.data.category))
    .on('mousemove', function (d) {
      console.log('mouseover');
      tooltip.style('opacity', 0.9);
      tooltip.html(
        'Nom : ' +
        d.data.name +
        '<br>Categorie : ' +
        d.data.category.replace('Drama', 'Drame')
        .replace('Adventure', 'Aventure')
        .replace('Comedy', 'Comédie')
        .replace('Family', 'Famille')
        .replace('Product Design', 'Conception de produit')
        .replace('Technology', 'Technologie')
        .replace('Gaming Hardware', 'Matériel de jeu')
        .replace('Television', 'Télévision')
        .replace('Apparel', 'Habillement')
        .replace('Tabletop Games', 'Jeux de table')
        .replace('Hardware', 'Matériel')
        .replace('Narrative Film', 'Film narratif')
        .replace('Games', 'Jeux')
        .replace('Video Games', 'Jeux vidéeo')
        .replace('Sound', 'Son')
        .replace('3D Printing', 'Impression 3D')
        .replace('Wearables', 'Accessoires') +
        '<br>Valeur : ' +
        d.data.value)
      .attr('data-value', d.data.value)
      .style('left', d3.event.pageX + 10 + 'px')
      .style('top', d3.event.pageY - 28 + 'px');
    })
    .on('mouseout', function () {
      tooltip.style('opacity', 0);
    });

  cell.append('text')
    .attr('class', 'tile-text')
    .selectAll('tspan')
    .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    .enter()
    .append('tspan')
    .attr('x', 4)
    .attr('y', (d, i) => 13 + i * 10)
    .text((d) => d);

  let categories = root.leaves().map((nodes) => nodes.data.category);
  categories = categories.filter((category, index, self) => self.indexOf(category) === index);
  let legend = d3.select('#legend');
  let legendWidth = +legend.attr('width');
  const legend_offset = 10;
  const legend_rect_size = 15;
  const legend_h_spacing = 200;
  const legend_v_spacing = 10;
  const legend_text_x_offset = 3;
  const legend_text_y_offset = -2;
  let legendElemsPerRow = Math.floor(legendWidth / legend_h_spacing);
  let legendElem = legend.append('g')
    .attr('transform', 'translate(60,' + legend_offset + ')')
    .selectAll('g')
    .data(categories)
    .enter()
    .append('g')
    .attr('transform', function (d, i) {
      return (
        'translate(' +
        i % legendElemsPerRow * legend_h_spacing +
        ',' + (
          Math.floor(i / legendElemsPerRow) * legend_rect_size +
          legend_v_spacing * Math.floor(i / legendElemsPerRow)) +
          ')');
    });

  legendElem.append('rect')
    .attr('width', legend_rect_size)
    .attr('height', legend_rect_size)
    .attr('class', 'legend-item')
    .attr('fill', (d) => color(d));

  legendElem.append('text')
    .attr('x', legend_rect_size + legend_text_x_offset)
    .attr('y', legend_rect_size + legend_text_y_offset)
    .text((d) => d.replace('Drama', 'Drame')
      .replace('Biography', 'Biographie')
      .replace('Adventure', 'Aventure')
      .replace('Comedy', 'Comédie')
      .replace('Family', 'Famille')
      .replace('Product Design', 'Conception de produit')
      .replace('Technology', 'Technologie')
      .replace('Gaming Hardware', 'Matériel de jeu')
      .replace('Television', 'Télévision')
      .replace('Apparel', 'Habillement')
      .replace('Tabletop Games', 'Jeux de table')
      .replace('Hardware', 'Matériel')
      .replace('Narrative Film', 'Film narratif')
      .replace('Games', 'Jeux')
      .replace('Video Games', 'Jeux vidéeo')
      .replace('Sound', 'Son')
      .replace('3D Printing', 'Impression 3D')
      .replace('Wearables', 'Accessoires')
    );
});
