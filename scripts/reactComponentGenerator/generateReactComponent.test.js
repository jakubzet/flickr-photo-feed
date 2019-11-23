/* global ENV_PROD_NAME */
const reactComponentGenerator = require("./generateReactComponent");

const {
  textStartsWithCapitalLetter,
  textHasProperLength
} = reactComponentGenerator;

describe("initialize", () => {
  it("Throw during initialization when not in development mode", () => {
    expect(() => {
      require("./index")(ENV_PROD_NAME);
    }).toThrow();
  });
});

describe("textStartsWithCapitalLetter", () => {
  it("Properly checks initial letter", () => {
    const validComponentName = "Valid";
    const invalidComponentName = "invalid";

    expect(textStartsWithCapitalLetter(validComponentName)).toBe(true);

    expect(textStartsWithCapitalLetter(invalidComponentName)).toBe(false);
  });
});

describe("textHasProperLength", () => {
  it("Properly checks string length", () => {
    const properString = "Valid";
    const shortString = "inv";

    expect(textHasProperLength(properString)).toBe(true);

    expect(textHasProperLength(shortString)).toBe(false);
  });
});
