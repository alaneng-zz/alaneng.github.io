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


  },

  draw(data) {
    let rollNums = _.keys(data);
    let rollTallies = _.keys(data).map(rollNum => data[rollNum]);

    x = d3.scaleBand()
            .range([0, w])
            .padding(0.1);
    y = d3.scaleLinear()
            .range([h, 0]);

    x.domain(rollNums);
    y.domain([0, d3.max(rollTallies)]);

    let rollHash = {
      'rollNums': rollNums,
      'rollTallies': rollTallies
    };

    console.log('rollHash:', rollHash);

    svg.selectAll('.bar')
        .data(rollHash)
        .enter().append('rect')
          .attr('class', 'bar')
          .attr('fill', 'blue')
          .attr('x', function(d) { return x(d.rollNums) })
          .attr('width', x.bandwidth())
          .attr('y', function(d) { return y(d.rollTallies) })
          .attr('height', function(d) { return h - y(d.rollTallies) })

    svg.append("g")
      .attr("transform", "translate(0," + h + ")")
      .call(d3.axisBottom(x));

    svg.append("g")
      .call(d3.axisLeft(y));

  }
};
