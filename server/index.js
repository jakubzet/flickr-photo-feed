const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const DEV_ENV_ENABLED = process.env.NODE_ENV !== "production";

function handleListen(err) {
  if (err) {
    console.error("> Error connecting server:", err);
  }

  console.log(`> Successfully running server on localhost:${PORT}`);
}

function initializeServer() {
  const server = express();
  const router = express.Router();

  router.get("/api", (_, res) => {
    res.json("hello world");
  });

  server.use(morgan("tiny"));
  server.use(router);

  server.listen(PORT, handleListen);
}

if (DEV_ENV_ENABLED) {
  initializeServer();
} else {
  console.error("> Server only available in development mode");
}
