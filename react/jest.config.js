/* global module */
module.exports = {
  name: "react",
  displayName: "react",
  rootDir: "./../",
  testMatch: ["<rootDir>/react/**/*.test.js"],
  setupFiles: ["jest-prop-type-error", "<rootDir>/react/jest.setup.js"],
  setupFilesAfterEnv: ["<rootDir>/react/rtl.setup.js"]
};
