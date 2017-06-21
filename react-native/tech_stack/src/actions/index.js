export const SELECT_LIBRARY_ID = "SELECT_LIBRARY_ID";

export const selectLibraryId = libraryId => {
  return {
    type: SELECT_LIBRARY_ID,
    payload: libraryId
  };
};
