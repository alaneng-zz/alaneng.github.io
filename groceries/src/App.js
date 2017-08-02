import React, { Component } from "react"
import { connect } from "react-redux"
import { Card, Table } from "semantic-ui-react"
import _ from "lodash"
import moment from "moment"
import classnames from "classnames"

import GroceryInput from "./components/grocery-input"
import {
  fetchGroceryList,
  onEnterGroceryItem,
  addNewItem,
  addNewExpirationDate,
  addNewItemType,
  toggleShowCallouts,
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
      inputGroceryExpirationDate,
      inputGroceryItemType,
      addNewItem,
      addNewExpirationDate,
      addNewItemType,
      onEnterGroceryItem,
      toggleShowCallouts,
      isShowingCallout,
    } = this.props

    const groceryCards = _.keys(groceryList).map(itemType => {
      let groceryItems = _.values(groceryList[itemType])
      groceryItems = _.sortBy(groceryItems, "expirationDate")

      const groceryListItems = groceryItems.map(item => {
        const groceryKey = `${item.expirationDate}_${item.item}`
        const momentExpirationDate = moment(item.expirationDate)
        const momentToday = moment().format("YYYY-MM-DD")
        const daysBetween = momentExpirationDate.diff(momentToday, "days")

        let cellClassnames
        if (isShowingCallout) {
          cellClassnames = classnames({
            "expired-already": daysBetween < 0,
            "expiring-soon": daysBetween >= 0 && daysBetween <= 31,
          })
        }

        return (
          <Table.Row key={groceryKey} className={cellClassnames}>
            <Table.Cell>
              {item.item}
            </Table.Cell>
            <Table.Cell>
              {moment(item.expirationDate).format("M/D/YY") === "Invalid date"
                ? <span style={{ opacity: "0.2" }}>none</span>
                : moment(item.expirationDate).format("M/D/YY")}
            </Table.Cell>
          </Table.Row>
        )
      })

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
            <Table basic="very" textAlign="center" celled selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    <span style={{ opacity: "0.2" }}>item</span>
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted="ascending">
                    <span style={{ opacity: "0.2" }}>expiration date</span>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {groceryListItems}
              </Table.Body>
            </Table>
          </Card.Content>
        </Card>
      )
    })

    const addNewItemIsDisabled =
      !this.props.inputGroceryItem || !this.props.inputGroceryItemType

    return (
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: "48px", padding: "20px" }}>Groceries!</h3>
        <div className="app-content">
          <div className="grocery-input">
            <GroceryInput
              inputGroceryItem={inputGroceryItem}
              inputGroceryExpirationDate={inputGroceryExpirationDate}
              inputGroceryItemType={inputGroceryItemType}
              addNewItem={addNewItem}
              addNewExpirationDate={addNewExpirationDate}
              addNewItemType={addNewItemType}
              onEnterGroceryItem={onEnterGroceryItem}
              addNewItemIsDisabled={addNewItemIsDisabled}
              toggleShowCallouts={toggleShowCallouts}
            />
          </div>
          <div className="grocery-container">
            <div className="grocery-cards">
              {groceryCards}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputGroceryItem: state.inputGroceryItem,
    inputGroceryExpirationDate: state.inputGroceryExpirationDate,
    inputGroceryItemType: state.inputGroceryItemType,
    groceryList: state.groceryList,
    isShowingCallout: state.isShowingCallout,
  }
}

export default connect(mapStateToProps, {
  fetchGroceryList,
  onEnterGroceryItem,
  addNewItem,
  addNewExpirationDate,
  addNewItemType,
  toggleShowCallouts,
})(App)
