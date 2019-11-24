import colors from "./colors";
import typography from "./typography";
import breakpoints from "./breakpoints";
import constants from "./constants";
import initHelpers from "./helpers";

const defaultThemeVars = {
  colors,
  typography,
  breakpoints,
  constants
};

export const defaultTheme = {
  ...defaultThemeVars,
  helpers: initHelpers(defaultThemeVars)
};
