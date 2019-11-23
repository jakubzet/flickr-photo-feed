import React from "react";
import { render } from "@testing-library/react";
import { Sample } from "./Sample";

describe("Sample", () => {
  it("Renders", () => {
    const { container } = render(<Sample />);

    expect(container).toBeDefined();
  });
});
