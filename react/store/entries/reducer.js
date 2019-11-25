import typeToReducer from "type-to-reducer";
import * as types from "./types";

const initialState = {
  categoryName: null,
  categoryLink: null,
  categoryDate: null,
  items: [],
  filterText: "",
  pending: false,
  error: null
};

const entriesReducer = typeToReducer(
  {
    [types.ENTRIES_REQUESTED]: state => ({
      ...state,
      pending: true,
      error: null
    }),

    [types.ENTRIES_REQUESTED_FULFILLED]: (state, { payload }) => ({
      ...state,
      categoryName: payload.title,
      categoryLink: payload.link,
      categoryDate: payload.modified,
      items: [...state.items, ...payload.items],
      pending: false,
      error: null
    }),

    [types.ENTRIES_REQUESTED_REJECTED]: (state, { payload }) => ({
      ...state,
      pending: false,
      error: payload
    }),

    [types.ENTRIES_SET_FILTER]: (state, { payload }) => ({
      ...state,
      filterText: payload.trim().toLowerCase()
    })
  },
  initialState
);

export default entriesReducer;
