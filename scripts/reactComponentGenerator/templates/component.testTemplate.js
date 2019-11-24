const stripIndent = require("strip-indent");

/* istanbul ignore next */
function create(name) {
  return stripIndent(`
    import React from "react";
    import { render } from "../../utils/reactTestingLibrary";
    import { ${name} } from "./${name}";

    describe("${name}", () => {
      it("Renders", () => {
        const { container } = render(<${name} />);

        expect(container).toBeDefined();
      });
    });
  `).trim();
}

module.exports = {
  create
};
