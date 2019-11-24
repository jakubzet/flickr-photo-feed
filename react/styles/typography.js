import { modularScale } from "polished";

const modularScaleBase = "1em";

const modularScaleRatio = "perfectFourth";

const typography = {
  type: {
    primary: `"Roboto Regular", sans-serif`,
    secondary: `"Roboto Bold", sans-serif`
  },
  weight: {
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  size: {
    0: 0,
    1: modularScale(0, modularScaleBase, modularScaleRatio),
    2: modularScale(1, modularScaleBase, modularScaleRatio),
    3: modularScale(2, modularScaleBase, modularScaleRatio),
    4: modularScale(3, modularScaleBase, modularScaleRatio),
    5: modularScale(4, modularScaleBase, modularScaleRatio),
    6: modularScale(5, modularScaleBase, modularScaleRatio)
  }
};

export default typography;
