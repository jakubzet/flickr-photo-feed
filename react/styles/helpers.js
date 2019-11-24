import { css } from "styled-components";

const createWrapper = theme => () => css`
  max-width: ${theme.constants.wrapperWidth};
  margin: 0 auto;
`;

const initHelpers = theme => ({
  createWrapper: createWrapper(theme)
});

export default initHelpers;
