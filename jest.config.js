module.exports = {
  globals: {
    ENV_DEV_NAME: "development",
    ENV_PROD_NAME: "production"
  },
  transform: {
    "^.+\\.[tj]s?$": "babel-jest"
  },
  projects: ["./server/jest.config.js"]
};
