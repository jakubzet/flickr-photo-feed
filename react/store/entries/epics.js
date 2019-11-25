import * as types from "./types";
import actions from "./actions";
import { ofType } from "redux-observable";
import { apiService } from "../../services";
import { from } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

const apiServiceObservable = from(apiService.get());

const entriesEpic = action$ =>
  action$.pipe(
    ofType(types.ENTRIES_REQUESTED),
    switchMap(() =>
      apiServiceObservable.pipe(
        map(res => actions.writeEntries(res)),
        catchError(err => actions.errorEntries(err.message))
      )
    )
  );

export default {
  entriesEpic
};
