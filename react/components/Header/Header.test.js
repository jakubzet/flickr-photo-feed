import React from "react";
import { render } from "../../utils/reactTestingLibrary";
import { Header } from "./Header";

describe("Header", () => {
  it("Renders", () => {
    const { container } = render(<Header />);

    expect(container).toBeDefined();
  });
});
