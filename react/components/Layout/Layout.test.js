import React from "react";
import { render } from "../../utils/reactTestingLibrary";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("Renders", () => {
    const { container } = render(
      <Layout header={<div>Header</div>} footer={<div>Footer</div>}>
        Hello!
      </Layout>
    );

    expect(container).toBeDefined();
  });
});
