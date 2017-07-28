import React, { Component } from "react"
import _ from "lodash"
import { Icon, Header } from "semantic-ui-react"

import Doggie from "./Doggie"
import "./App.css"

class App extends Component {
  state = { loadingFlag: false, breeds: [] }

  async fetchAnimals() {
    await fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(breeds => this.setState({ breeds: _.keys(breeds.message) }))

    return
  }

  async fetchAnimalPics() {
    const { breeds } = this.state

    for (let breed of breeds) {
      await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(images => this.setState({ [breed]: images.message }))
    }

    return
  }

  componentDidMount() {
    this.setState({ loadingFlag: true })
    this.fetchAnimals().then(() => this.fetchAnimalList())
  }

  fetchAnimalList() {
    this.setState({ loadingFlag: true })
    this.fetchAnimalPics().then(() => this.setState({ loadingFlag: false }))
  }

  render() {
    console.log(this.state.loadingFlag)

    const doggies = _.keys(this.state).map(doggie => {
      if (!["loadingFlag", "breeds"].includes(doggie)) {
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
                  onClick={() => this.fetchAnimalList()}
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
