import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Button } from 'react-bootstrap'

export default class Main extends React.Component {  
  render() {
    return (
      <Grid>
        <h1>Awesome</h1>
      </Grid>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))