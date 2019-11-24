import * as types from "./types";
import { ofType } from "redux-observable";
import { apiService } from "../../services";
import { from } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";

const entriesEpic = action$ =>
  action$.pipe(
    ofType(types.ENTRIES_REQUESTED),
    // mapTo({
    //   type: types.ENTRIES_REQUESTED_PENDING
    // }),
    mergeMap(() =>
      from(apiService.get()).pipe(
        map(res => ({ type: types.ENTRIES_REQUESTED_FULFILLED, payload: res })),
        catchError(err =>
          Promise.resolve({
            type: types.ENTRIES_REQUESTED_REJECTED,
            message: err.message
          })
        )
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
