var d3 = require('d3');
import _ from 'lodash';

let margin, w, h, svg, x, y;

module.exports = {
  createCanvas() {
    margin = {top: 20, right: 20, bottom: 30, left: 40};
    w = 960 - margin.left - margin.right;
    h = 500 - margin.top - margin.bottom;

    svg = d3.select('.barchart').append('svg')
              .attr('class', 'woot')
              .attr('width', w + margin.left + margin.right)
              .attr('height', h + margin.top + margin.bottom)
              .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.append("g")
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${h})`);

    svg.append("g")
      .attr('class', 'y axis')
  },

  draw(data) {
    let rollNums = _.keys(data);
    let rollTallies = _.keys(data).map(rollNum => data[rollNum]);

    var rollHash = _.range(2, 13).map(x => {return {'key': x, 'value': rollTallies[x-2]}})

    x = d3.scaleBand()
            .domain(rollNums)
            .range([0, w])
            .padding(0.1);

    y = d3.scaleLinear()
            .domain([0, d3.max(rollHash, (d) => d.value)])
            .range([h, 0]);

    // enter selection. each value (which is 0) gets is own barchart with height 0
    svg.selectAll('.bar')
        .data(rollHash)
        .enter().append('rect')
          .transition()
          .duration(300)
            .attr('class', 'bar')
            .attr('fill', '#369')
            .attr('x', function(d) { return x(d.key) })
            .attr('width', x.bandwidth())
            .attr('y', function(d) { return y(d.value) })
            .attr('height', function(d) { return h - y(d.value) })

    // update selection
    svg.selectAll('rect')
       .data(rollHash)
       .transition()
       .duration(300)
         .attr('class', 'bar')
         .attr('fill', '#369')
         .attr('x', function(d) { return x(d.key) })
         .attr('width', x.bandwidth())
         .attr('y', function(d) { return y(d.value) })
         .attr('height', function(d) { return h - y(d.value) })

    svg.select('.x.axis')
       .transition()
       .duration(500)
       .call(d3.axisBottom(x));

    svg.select('.y.axis')
       .transition()
       .duration(500)
      .call(d3.axisLeft(y));
  }
};
