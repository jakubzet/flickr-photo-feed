const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fakeDataGenerator = require("./fakeDataGenerator");

const PORT = process.env.SERVER_PORT || 8080;
const ENV = process.env.NODE_ENV || "development";

function handleListen(err) {
  if (err) {
    throw new Error("> Error connecting server:", err);
  }

  console.log(`> Successfully running server on localhost:${PORT}`);
}

function initServerListener(mode = ENV) {
  if (mode !== "development") {
    throw new Error("> Server is only available in development mode");
  }

  const server = express();
  const router = express.Router();

  router.get("/api", (_, res) => {
    res.jsonp(fakeDataGenerator.createFakeResponseData(4));
  });

  server.use(cors());
  server.use(morgan("tiny"));
  server.use(router);

  return server.listen(PORT, handleListen);
}

module.exports = {
  handleListen,
  initServerListener
};
