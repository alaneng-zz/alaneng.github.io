var React = require('react');
var Table = require('react-bootstrap/lib/Table');

module.exports = React.createClass({

  render: function() {
    var {datatable} = this.props

    if(Object.keys(datatable).length !== 0) {
      var headers = datatable.columns.map(col => 
        <th key={col.data}>{col.data}</th>  
      )

      var body = datatable.data.map(row =>
        <tr key={row.location}>
          <td>{row.location}</td>
          <td>{row.city}</td>
          <td>{row.address}</td>
          <td>{row.state}</td>
          <td>{row.phone_number}</td>
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