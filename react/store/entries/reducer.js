import typeToReducer from "type-to-reducer";
import * as types from "./types";

const initialState = {
  categoryName: null,
  categoryLink: null,
  categoryDate: null,
  items: [],
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
      items: payload.items,
      pending: false,
      error: null
    }),

    [types.ENTRIES_REQUESTED_REJECTED]: (state, { payload }) => ({
      ...state,
      pending: false,
      error: payload
    })
  },
  initialState
);

export default entriesReducer;
