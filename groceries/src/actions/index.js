import firebase from "firebase"
import _ from "lodash"

export const ENTER_GROCERY_ITEM = "ENTER_GROCERY_ITEM"
export const ADD_NEW_ITEM = "ADD_NEW_ITEM"
export const CLEAR_INPUT_ITEM = "CLEAR_INPUT_ITEM"
export const GROCERIES_FETCH_SUCCESS = "GROCERIES_FETCH_SUCCESS"
export const ENTER_FOOD_TYPE = "ENTER_FOOD_TYPE"

export const fetchGroceryList = () => {
  return dispatch => {
    // on('value') listens for changes and runs the dispatch each time there's a change
    firebase.database().ref("/inventory").on("value", snapshot => {
      dispatch({
        type: GROCERIES_FETCH_SUCCESS,
        payload: _.values(snapshot.val()),
      })
    })
  }
}

export const onEnterGroceryItem = item => {
  return {
    type: ENTER_GROCERY_ITEM,
    payload: item.value,
  }
}

export const addNewItem = () => {
  return (dispatch, getState) => {
    const inputGroceryItem = getState().inputGroceryItem

    dispatch({ type: CLEAR_INPUT_ITEM })

    firebase.database().ref("/inventory").push(inputGroceryItem)
  }
}

export const addNewItemType = inputFoodType => {
  return {
    type: ENTER_FOOD_TYPE,
    payload: inputFoodType,
  }
}
