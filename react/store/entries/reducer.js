import typeToReducer from "type-to-reducer";
import * as types from "./types";

const initialState = {
  items: [],
  pending: false,
  error: null
};

const entriesReducer = typeToReducer(
  {
    [types.ENTRIES_REQUESTED]: {
      PENDING: state => ({
        ...state,
        pending: true,
        error: null
      }),

      FULFILLED: (state, { payload }) => ({
        ...state,
        items: payload,
        pending: false,
        error: null
      }),

      REJECTED: (state, { payload }) => ({
        ...state,
        pending: false,
        error: payload
      })
    }
  },
  initialState
);

export default entriesReducer;
