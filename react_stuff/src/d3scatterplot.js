import d3 from 'd3'

var xScale = w => d3.scale.linear().domain([ 0, 100 ]).range([ 0, w ])
var yScale = h => d3.scale.linear().domain([ 0, 100 ]).range([ h, 0 ])

module.exports = {

  create(el, props) {
    var x = xScale(props.width)
    var y = yScale(props.height)
    var xAxis = d3.svg.axis().scale(x).orient('bottom').ticks(5)
    var yAxis = d3.svg.axis().scale(y).orient('left').ticks(5)

    var svg = d3.select(el)
      .append('svg')
        .attr('width', props.width + props.margin.left + props.margin.right)
        .attr('height', props.height + props.margin.bottom + props.margin.top)

    svg.append('g')
        .attr('class', 'axis')
        .attr('transform',
              'translate(' + (props.margin.left - 5) +
              ',' + props.margin.top + ')')
        .call(yAxis)

    svg.append('g')
        .attr('class', 'axis')
        .attr('transform',
              'translate(' + props.margin.left +
              ',' + (props.margin.top + props.height + 5) + ')')
        .call(xAxis)

    svg.append('g')
        .attr('class', 'scatterplot')
        .attr('transform',
              'translate(' + props.margin.left + ',' + props.margin.top + ')')

    this.update(el, props)
  },

  update(el, props) {
    var plot = d3.select(el).select('.scatterplot')
    var x = xScale(props.width)
    var y = yScale(props.height)

    var points = plot.selectAll('g')
        .data(props.data, d => d[0])

    points.attr('class', 'update')
      .transition()
        .duration(750)
        .attr('transform', d => 'translate(' + x(d[1]) + ',' + y(d[2]) + ')')

    var newPoints = points.enter().append('g')
        .attr('class', 'enter')
        .attr('transform', d => 'translate(' + x(d[1]) + ',' + y(d[2]) + ')')
        .attr('fill-opacity', 1e-6)

    newPoints.append('circle')
        .attr('r', props.r)

    newPoints.transition()
        .duration(750)
        .attr('fill-opacity', 1)

    points.exit()
        .attr('class', 'exit')
      .transition()
        .duration(750)
        .style('fill-opacity', 1e-6)
        .remove()
  }
}
