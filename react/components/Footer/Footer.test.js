import React from "react";
import { render } from "../../utils/reactTestingLibrary";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("Renders", () => {
    const { container, asFragment } = render(<Footer />);

    expect(container).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
