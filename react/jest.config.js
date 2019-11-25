/* global module */
module.exports = {
  name: "react",
  displayName: "react",
  rootDir: "./../",
  testMatch: ["<rootDir>/react/**/*.test.js"],
  setupFiles: ["jest-prop-type-error"],
  setupFilesAfterEnv: ["<rootDir>/react/rtl.setup.js"]
};
