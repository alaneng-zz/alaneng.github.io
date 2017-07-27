import React, { Component } from "react"
import _ from "lodash"
import { Icon, Header } from "semantic-ui-react"

import Doggie from "./Doggie"
import "./App.css"

class App extends Component {
  state = { loadingFlag: false }

  fetchAnimals() {
    this.setState({ loadingFlag: true })

    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(breeds =>
        _.keys(breeds.message).forEach(breed => {
          fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(res => res.json())
            .then(img => this.setState({ [breed]: img.message }))
        })
      )
      .then(() => this.setState({ loadingFlag: false }))
  }

  componentDidMount() {
    this.fetchAnimals()
  }

  render() {
    const doggies = _.keys(this.state).map(doggie => {
      if (doggie !== "loadingFlag") {
        return <Doggie key={doggie} doggie={doggie} img={this.state[doggie]} />
      } else {
        return false
      }
    })

    return (
      <div>
        <div style={{ padding: "30px" }}>
          <Header as="h1" icon textAlign="center">
            {this.state.loadingFlag
              ? <Icon name="paw" loading circular />
              : <Icon
                  name="paw"
                  className="icon-cursor"
                  circular
                  onClick={() => this.fetchAnimals()}
                />}
            <Header.Content>Doggies!</Header.Content>
          </Header>
        </div>
        <div className="gallery">
          {doggies}
        </div>
      </div>
    )
  }
}

export default App
