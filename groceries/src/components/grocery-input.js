import React from "react"
import { Button, Input, Checkbox } from "semantic-ui-react"
import moment from "moment"

import { foodTypeOptions } from "../utils"

class GroceryInput extends React.Component {
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.addNewItem()
    }
  }

  render() {
    // var moment = require("moment")
    // debugger

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
          <h3>what's the item?</h3>
          <Input
            fluid
            style={{ userSelect: "none" }}
            placeholder="potstickers"
            value={this.props.inputGroceryItem}
            onChange={(event, data) => this.props.onEnterGroceryItem(data)}
            onKeyPress={e => this.handleKeyPress(e)}
          />
          <h3>when does it expire?</h3>
          <Input
            type="date"
            fluid
            value={this.props.inputGroceryExpirationDate}
            onChange={(event, data) => this.props.addNewExpirationDate(data)}
            min={moment().format("YYYY-MM-DD")}
          />
        </div>
        <h3>what type of food is this?</h3>
        <div className="grocery-item-type-buttons">
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
            size="huge"
          >
            Add new item
          </Button>
        </div>
        <div>
          <Checkbox
            toggle
            label="show callouts"
            onChange={() => this.props.toggleShowCallouts()}
          />
        </div>
        <br />
        <div>
          <Checkbox
            toggle
            label="edit mode"
            onChange={() => this.props.toggleEditMode()}
          />
        </div>
      </div>
    )
  }
}

export default GroceryInput
