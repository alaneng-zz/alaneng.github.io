import data from "./LibraryList.json";

export default function(state = [], action) {
  switch (action.type) {
    default:
      return data;
  }
}
