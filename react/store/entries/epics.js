import * as types from "./types";
import actions from "./actions";
import { ofType } from "redux-observable";
import { apiService } from "../../services";
import { from } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

const entriesEpic = action$ =>
  action$.pipe(
    ofType(types.ENTRIES_REQUESTED),
    // mapTo({
    //   type: types.ENTRIES_REQUESTED_PENDING
    // }),
    switchMap(() =>
      from(apiService.get()).pipe(
        map(res => actions.writeEntries(res)),
        catchError(err => actions.errorEntries(err.message))
      )
    )
  );
// mergeMap(async action => {
//   const data = await apiService.get();
//   return {
//     type: types.ENTRIES_REQUESTED_FULFILLED,
//     payload: data
//   };
// }),
// catchError(err =>
//   Promise.resolve({
//     type: types.ENTRIES_REQUESTED_REJECTED,
//     message: err.message
//   })
// )

export default {
  entriesEpic
};
