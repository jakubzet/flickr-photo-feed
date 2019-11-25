import { combineEpics, createEpicMiddleware } from "redux-observable";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import entriesReducer, { epics as entriesEpics } from "./entries";

const rootReducer = combineReducers({
  entries: entriesReducer
});

export function configureStore() {
  const rootEpic = combineEpics(entriesEpics.entriesEpic);

  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
