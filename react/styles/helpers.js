import { css } from "styled-components";
import { darken, lighten } from "polished";

const createWrapper = theme => () => css`
  max-width: ${theme.constants.wrapperWidth};
  margin: 0 auto;
`;

const createHoverEffect = theme => () => css`
  background: ${theme.colors.neonCarrot};
  transition: background ${theme.constants.transitionDuration};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: none;
    cursor: pointer;
    background: ${darken(0.25, theme.colors.neonCarrot)};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${lighten(0.25, theme.colors.neonCarrot)};
  }
`;

const initHelpers = theme => ({
  createWrapper: createWrapper(theme),
  createHoverEffect: createHoverEffect(theme)
});

export default initHelpers;
