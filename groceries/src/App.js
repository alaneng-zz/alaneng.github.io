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
import { foodTypeOptions } from "./utils"
import "./App.css"

class App extends Component {
  state = {
    dropdownOpen: false,
  }

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
      <div>
        <div className="item-input">
          <Input
            style={{ userSelect: "none" }}
            label={
              <Dropdown
                //                open={this.state.dropdownOpen}
                text={this.props.inputGroceryItemType || "select type..."}
                options={foodTypeOptions}
                onChange={(e, data) => this.props.addNewItemType(data.value)}
                //                onMouseDown={() => this.setState({ dropdownOpen: true })}
                //                onMouseUp={() => this.setState({ dropdownOpen: false })}
              />
            }
            labelPosition="right"
            placeholder="enter grocery item..."
            value={this.props.inputGroceryItem}
            onChange={(event, data) => this.props.onEnterGroceryItem(data)}
            onKeyPress={e => this.handleKeyPress(e)}
          />
          <Button
            circular
            basic
            onClick={() => this.props.addNewItem()}
            disabled={addNewItemIsDisabled}
          >
            Add new item
          </Button>
        </div>
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
