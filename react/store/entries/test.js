import { TestScheduler } from "rxjs/testing";
import { apiService } from "../../services";
import * as types from "./types";
import actions from "./actions";
import reducer, { initialState } from "./reducer";
import { entriesEpic } from "./epics";

const sampleAction = {
  type: "FOO"
};
const sampleResponse = {
  success: true,
  data: {
    title: "Lorem ipsum",
    items: []
  }
};
const sampleErrorMsg = "sample error message";
const sampleFilteredText = "sample filtered text";

describe("Entries duck", () => {
  describe("Action Creators tests", () => {
    it("requestEntries", () => {
      expect(actions.requestEntries()).toEqual({
        type: types.ENTRIES_REQUESTED
      });
    });

    it("writeEntries", () => {
      expect(actions.writeEntries(sampleResponse)).toEqual({
        type: types.ENTRIES_REQUESTED_FULFILLED,
        payload: sampleResponse.data
      });
    });

    it("errorEntries", () => {
      expect(actions.errorEntries(sampleErrorMsg)).toEqual({
        type: types.ENTRIES_REQUESTED_REJECTED,
        payload: sampleErrorMsg
      });
    });

    it("filterEntries", () => {
      expect(actions.filterEntries(sampleFilteredText)).toEqual({
        type: types.ENTRIES_SET_FILTER,
        payload: sampleFilteredText
      });
    });
  });

  describe("Actions tests", () => {
    it("Should return the initial state", () => {
      expect(reducer(initialState, sampleAction)).toEqual(initialState);
    });

    it("Should react to action returned by requestEntries", () => {
      expect(reducer(initialState, actions.requestEntries())).toHaveProperty(
        "pending",
        true
      );
    });

    it("Should react to action returned by writeEntries", () => {
      expect(
        reducer(initialState, actions.writeEntries(sampleResponse))
      ).toHaveProperty("categoryName", sampleResponse.data.title);
    });

    it("Should react to action returned by errorEntries", () => {
      expect(
        reducer(initialState, actions.errorEntries(sampleErrorMsg))
      ).toHaveProperty("error", sampleErrorMsg);
    });

    it("Should react to action returned by filterEntries", () => {
      expect(
        reducer(initialState, actions.filterEntries(sampleFilteredText))
      ).toHaveProperty("filterText", sampleFilteredText);
    });
  });

  describe("Effects tests", () => {
    const apiServiceGetSpy = jest
      .spyOn(apiService, "get")
      .mockImplementation(() => sampleResponse);

    it("entriesEpic", () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
        expect(apiService.get).toHaveBeenCalled();
        apiServiceGetSpy.mockClear();
      });

      testScheduler.run(helpers => {
        const { hot, cold, expectObservable } = helpers;

        const action$ = hot("-a", {
          a: actions.requestEntries()
        });

        const state$ = initialState;

        const output$ = entriesEpic(action$, state$, {
          getEntries$: cold("--a", {
            a: apiService.get()
          })
        });

        expectObservable(output$).toBe("---a", {
          a: actions.writeEntries(sampleResponse)
        });
      });
    });
  });
});
