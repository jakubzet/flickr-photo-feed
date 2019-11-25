import * as types from "./types";

const requestEntries = () => ({
  type: types.ENTRIES_REQUESTED
});

const writeEntries = response => ({
  type: types.ENTRIES_REQUESTED_FULFILLED,
  payload: response.data
});

const errorEntries = errorMessage => ({
  type: types.ENTRIES_REQUESTED_REJECTED,
  payload: errorMessage
});

const filterEntries = filterText => ({
  type: types.ENTRIES_SET_FILTER,
  payload: filterText
});

export default {
  requestEntries,
  writeEntries,
  errorEntries,
  filterEntries
};
