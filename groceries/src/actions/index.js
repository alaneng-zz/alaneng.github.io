import firebase from "firebase"

export const ENTER_GROCERY_ITEM = "ENTER_GROCERY_ITEM"
export const ENTER_GROCERY_ITEM_TYPE = "ENTER_GROCERY_ITEM_TYPE"
export const ADD_NEW_ITEM = "ADD_NEW_ITEM"
export const CLEAR_INPUT_ITEM = "CLEAR_INPUT_ITEM"
export const CLEAR_INPUT_GROCERY_EXPIRATION_DATE =
  "CLEAR_INPUT_GROCERY_EXPIRATION_DATE"
export const CLEAR_INPUT_ITEM_TYPE = "CLEAR_INPUT_ITEM_TYPE"
export const GROCERIES_FETCH_SUCCESS = "GROCERIES_FETCH_SUCCESS"
export const ENTER_GROCERY_EXPIRATION_DATE = "ENTER_GROCERY_EXPIRATION_DATE"
export const TOGGLE_SHOW_CALLOUTS = "TOGGLE_SHOW_CALLOUTS"

export const fetchGroceryList = () => {
  return dispatch => {
    // on('value') listens for changes and runs the dispatch each time there's a change
    firebase.database().ref("/inventory").on("value", snapshot => {
      dispatch({
        type: GROCERIES_FETCH_SUCCESS,
        payload: snapshot.val(),
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
    const inputGroceryItemType = getState().inputGroceryItemType
    const inputGroceryExpirationDate = getState().inputGroceryExpirationDate

    dispatch({ type: CLEAR_INPUT_ITEM })
    dispatch({ type: CLEAR_INPUT_ITEM_TYPE })
    dispatch({ type: CLEAR_INPUT_GROCERY_EXPIRATION_DATE })

    firebase.database().ref(`/inventory/${inputGroceryItemType}`).push({
      item: inputGroceryItem,
      expirationDate: inputGroceryExpirationDate,
    })
  }
}

export const addNewItemType = inputFoodType => {
  return {
    type: ENTER_GROCERY_ITEM_TYPE,
    payload: inputFoodType,
  }
}

export const addNewExpirationDate = expirationDate => {
  return {
    type: ENTER_GROCERY_EXPIRATION_DATE,
    payload: expirationDate.value,
  }
}

export const toggleShowCallouts = () => {
  return {
    type: TOGGLE_SHOW_CALLOUTS,
  }
}
