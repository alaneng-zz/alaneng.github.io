import React, { Component } from "react"
import { connect } from "react-redux"
import { List, Card } from "semantic-ui-react"
import _ from "lodash"

import GroceryInput from "./components/grocery-input"
import {
  onEnterGroceryItem,
  addNewItem,
  fetchGroceryList,
  addNewItemType,
} from "./actions"
import "./App.css"

class App extends Component {
  state = {
    dropdownOpen: false,
  }

  componentWillMount() {
    this.props.fetchGroceryList()
  }

  render() {
    const {
      groceryList,
      inputGroceryItem,
      inputGroceryItemType,
      addNewItem,
      addNewItemType,
      onEnterGroceryItem,
    } = this.props

    const groceryCards = _.keys(groceryList).map(itemType => {
      const groceryItems = _.values(groceryList[itemType])
      const groceryListItems = groceryItems.map(item =>
        <List.Item key={item} className="grocery-item">
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

    const addNewItemIsDisabled =
      !this.props.inputGroceryItem || !this.props.inputGroceryItemType

    return (
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: "48px", padding: "20px" }}>Groceries!</h3>
        <GroceryInput
          inputGroceryItem={inputGroceryItem}
          inputGroceryItemType={inputGroceryItemType}
          addNewItem={addNewItem}
          addNewItemType={addNewItemType}
          onEnterGroceryItem={onEnterGroceryItem}
          addNewItemIsDisabled={addNewItemIsDisabled}
        />
        <div className="grocery-container">
          <div className="grocery-cards">
            {groceryCards}
          </div>
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
