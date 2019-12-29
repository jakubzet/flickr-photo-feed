import { combineEpics, createEpicMiddleware } from "redux-observable";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import entriesReducer, { epic as entriesEpic } from "./entries";

const epicMiddleware = createEpicMiddleware();
const epics = [entriesEpic];

const reducers = {
  entries: entriesReducer
};
const middlewares = [epicMiddleware];

export function configureStore(enhancers = []) {
  const rootEpic = combineEpics(...epics);

  const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(...[applyMiddleware(...middlewares), ...enhancers])
  );

  epicMiddleware.run(rootEpic);

  return store;
}
