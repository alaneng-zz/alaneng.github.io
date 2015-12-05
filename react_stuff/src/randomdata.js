import d3 from 'd3'

var keys = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
             11, 12, 13, 14, 15, 16, 17, 18, 19 ]

var rand = () => Math.round(Math.random() * 100)

module.exports = function() {
  return d3.shuffle(keys)
      .slice(0, Math.floor(Math.random() * 20))
      .map(k => [ k, rand(), rand() ])
}
