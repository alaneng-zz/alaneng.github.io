import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, Input, List, Dropdown, Card } from "semantic-ui-react"
import _ from "lodash"

import {
  onEnterGroceryItem,
  addNewItem,
  fetchGroceryList,
  addNewItemType,
} from "./actions"
import "./App.css"

class App extends Component {
  componentWillMount() {
    this.props.fetchGroceryList()
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.addNewItem()
    }
  }

  render() {
    const { groceryList } = this.props
    console.log(this.props.groceryList)

    const groceryCards = _.keys(groceryList).map(itemType => {
      const groceryItems = _.values(groceryList[itemType])
      const groceryListItems = groceryItems.map(item =>
        <List.Item key={item}>
          {item}
        </List.Item>
      )

      return (
        <Card key={itemType} className="grocery-card">
          <Card.Content
            style={{
              maxHeight: "45px",
              minHeight: "45px",
            }}
          >
            <Card.Header>
              {itemType}
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <List items={groceryListItems} />
          </Card.Content>
        </Card>
      )
    })

    const meat = "meat"
    const vegetables = "vegetables"
    const drink = "drink"
    const fruit = "fruit"

    const foodTypeOptions = [
      { key: meat, text: meat, value: meat },
      { key: vegetables, text: vegetables, value: vegetables },
      { key: drink, text: drink, value: drink },
      { key: fruit, text: fruit, value: fruit },
    ]

    return (
      <div className="App">
        <Input
          label={
            <Dropdown
              text={this.props.inputGroceryItemType || "select type..."}
              options={foodTypeOptions}
              onChange={(e, data) => this.props.addNewItemType(data.value)}
            />
          }
          labelPosition="right"
          placeholder="enter grocery item..."
          value={this.props.inputGroceryItem}
          onChange={(event, data) => this.props.onEnterGroceryItem(data)}
          onKeyPress={e => this.handleKeyPress(e)}
        />
        <Button circular basic onClick={() => this.props.addNewItem()}>
          Add new item
        </Button>
        <div className="grocery-cards">
          {groceryCards}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputGroceryItem: state.inputGroceryItem,
    inputGroceryItemType: state.inputGroceryItemType,
    groceryList: state.groceryList,
  }
}

export default connect(mapStateToProps, {
  onEnterGroceryItem,
  addNewItem,
  fetchGroceryList,
  addNewItemType,
})(App)
