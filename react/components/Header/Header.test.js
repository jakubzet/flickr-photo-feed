import React from "react";
import { render } from "../../utils/reactTestingLibrary";
import { Header } from "./Header";

describe("Header", () => {
  it("Renders", () => {
    const { container, asFragment } = render(<Header />);

    expect(container).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
