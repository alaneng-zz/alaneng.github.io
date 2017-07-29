import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, Input, List, ListItem, Dropdown } from "semantic-ui-react"

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
    console.log(this.props.groceryList)

    // const groceryList = this.props.groceryList.map(item =>
    //   <ListItem key={item}>
    //     {item}
    //   </ListItem>
    // )

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
        {/*<List items={groceryList} />*/}
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
