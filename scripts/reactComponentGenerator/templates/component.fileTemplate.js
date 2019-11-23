const stripIndent = require("strip-indent");

/* istanbul ignore next */
function create(name) {
  return stripIndent(`
    import React from "react";
    import P from "prop-types";

    const defaultProps = {
      children: null
    }

    export const ${name} = ({children} = defaultProps) => <div>
      <div>Hello ${name}!</div>
      <div>{children}</div>
    </div>;

    ${name}.defaultProps = defaultProps;

    ${name}.propTypes = {
      children: P.node
    };
  `).trim();
}

module.exports = {
  create
};
