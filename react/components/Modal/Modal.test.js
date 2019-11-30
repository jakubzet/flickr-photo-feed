import React from "react";
import { render } from "../../utils/reactTestingLibrary";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("Renders", () => {
    const { container, asFragment } = render(<Modal />);

    expect(container).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
