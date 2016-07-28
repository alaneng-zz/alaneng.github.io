import d3 from 'd3';

module.exports = {
  createCanvas() {
    var svg = d3.select('.barchart').append('svg')
                  .attr('height', 400)
                  .attr('width', 800)
                  .attr('class', 'woot');
  },
  draw(rollTally) {
    d3.select('svg').append('circle')
        .attr('r', 10)
        .attr('fill', '#369')
  }
};
