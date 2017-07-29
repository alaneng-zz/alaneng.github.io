import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, Input, List, ListItem } from "semantic-ui-react"

import { onEnterGroceryItem, addNewItem, fetchGroceryList } from "./actions"
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
    const groceryList = this.props.groceryList.map(item =>
      <ListItem key={item}>
        {item}
      </ListItem>
    )

    return (
      <div className="App">
        <Input
          value={this.props.inputGroceryItem}
          onChange={(event, data) => this.props.onEnterGroceryItem(data)}
          onKeyPress={e => this.handleKeyPress(e)}
        />
        <Button circular basic onClick={() => this.props.addNewItem()}>
          Add new item
        </Button>
        <List items={groceryList} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputGroceryItem: state.inputGroceryItem,
    groceryList: state.groceryList,
  }
}

export default connect(mapStateToProps, {
  onEnterGroceryItem,
  addNewItem,
  fetchGroceryList,
})(App)
