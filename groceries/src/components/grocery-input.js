import React from "react"
import { Button, Input } from "semantic-ui-react"

import { foodTypeOptions } from "../utils"

class GroceryInput extends React.Component {
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.addNewItem()
    }
  }

  render() {
    const foodTypeButtons = foodTypeOptions.map(option => {
      const buttonSelected = option.key === this.props.inputGroceryItemType

      return (
        <Button
          color={buttonSelected ? "blue" : null}
          disabled={buttonSelected}
          onClick={(e, data) => this.props.addNewItemType(data.children)}
          style={{ margin: "5px", borderRadius: "10px" }}
          key={option.key}
        >
          {option.key}
        </Button>
      )
    })

    return (
      <div className="item-input">
        <div style={{ width: "250px", margin: "auto" }}>
          <Input
            fluid
            style={{ userSelect: "none" }}
            placeholder="enter grocery item..."
            value={this.props.inputGroceryItem}
            onChange={(event, data) => this.props.onEnterGroceryItem(data)}
            onKeyPress={e => this.handleKeyPress(e)}
          />
        </div>
        <div
          style={{
            padding: "20px",
            width: "25%",
            margin: "auto",
          }}
        >
          <Button.Group
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {foodTypeButtons}
          </Button.Group>
        </div>
        <div>
          <Button
            color={this.props.addNewItemIsDisabled ? null : "green"}
            circular
            basic
            onClick={() => this.props.addNewItem()}
            disabled={this.props.addNewItemIsDisabled}
          >
            Add new item
          </Button>
        </div>
      </div>
    )
  }
}

export default GroceryInput
