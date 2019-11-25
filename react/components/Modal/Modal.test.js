import React from "react";
import { render } from "../../utils/reactTestingLibrary";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("Renders", () => {
    const { container } = render(<Modal />);

    expect(container).toBeDefined();
  });
});