var React = require('react');
var Table = require('react-bootstrap/lib/Table');

module.exports = React.createClass({

  render: function() {
    var {datatable} = this.props
    debugger
    if(datatable.length !== 0) {
      var headers = Object.keys(datatable[0]).map(head =>
        <th key={head}>{head}</th>  
      )

      var body = datatable.map(row =>
        <tr key={row.extn}>
          <td>{row.name}</td>
          <td>{row.position}</td>
          <td>{row.salary}</td>
          <td>{row.start_date}</td>
          <td>{row.office}</td>
          <td>{row.extn}</td>
        </tr>
      )      
    }



    return (
      <Table responsive hover>
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {body}
        </tbody>
      </Table>
    )
  }
})