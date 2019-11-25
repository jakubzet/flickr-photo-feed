const stripIndent = require("strip-indent");

/* istanbul ignore next */
function create(name) {
  return stripIndent(`
    import styled from "styled-components";

    export const ${name} = styled.div\`
      position: relative;
    \`;
  `).trim();
}

module.exports = {
  create
};
