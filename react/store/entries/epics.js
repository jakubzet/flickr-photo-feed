import { ofType, combineEpics } from "redux-observable";
import { from } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { apiService } from "../../services";
import * as types from "./types";
import actions from "./actions";

const getEntriesObservableFromService = from(apiService.get());

export const entriesEpic = (action$, _, deps = {}) => {
  const getEntries$ = deps.getEntries$ || getEntriesObservableFromService;

  return action$.pipe(
    ofType(types.ENTRIES_REQUESTED),
    switchMap(() =>
      getEntries$.pipe(
        map(res => actions.writeEntries(res)),
        catchError(err => actions.errorEntries(err.message))
      )
    )
  );
};

export default combineEpics(entriesEpic);
