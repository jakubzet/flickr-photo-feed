import React from "react";
import { render } from "../../utils/reactTestingLibrary";
import { EntriesList } from "./EntriesList";

describe("EntriesList", () => {
  it("Renders", () => {
    const { container, asFragment } = render(
      <EntriesList isFetching={false} />
    );

    expect(container).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
