import React from "react";
import { render } from "../../utils/reactTestingLibrary";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("Renders", () => {
    const { container } = render(<Footer />);

    expect(container).toBeDefined();
  });
});
