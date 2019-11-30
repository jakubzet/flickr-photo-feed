const stripIndent = require("strip-indent");

/* istanbul ignore next */
function create(name) {
  return stripIndent(`
    import React from "react";
    import { render } from "../../utils/reactTestingLibrary";
    import { ${name} } from "./${name}";

    describe("${name}", () => {
      it("Renders", () => {
        const { container, asFragment } = render(<${name} />);

        expect(container).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
      });
    });
  `).trim();
}

module.exports = {
  create
};
