const stripIndent = require("strip-indent");

/* istanbul ignore next */
function create(name) {
  return stripIndent(`
    import React from "react";
    import P from "prop-types";
    import * as S from "./styled";

    const defaultProps = {
      children: null
    }

    export const ${name} = ({children} = defaultProps) => <S.${name}>
      <div>Hello ${name}!</div>
      <div>{children}</div>
    </S.${name}>;

    ${name}.defaultProps = defaultProps;

    ${name}.propTypes = {
      children: P.node
    };
  `).trim();
}

module.exports = {
  create
};
