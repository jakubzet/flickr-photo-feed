const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const DEV_ENV_ENABLED = process.env.NODE_ENV !== "production";

async function initialize() {
  const server = express();
  const router = express.Router();

  router.get("/api", (_, res) => {
    res.json("hello world");
  });

  server.use(morgan("tiny"));
  server.use(router);

  try {
    await server.listen(PORT);
    console.log(`> Successfully running server on localhost:${PORT}`);
  } catch (e) {
    console.error("> Error connecting server:", e);
  }
}

if (DEV_ENV_ENABLED) {
  initialize();
} else {
  console.error("> Server only available in development mode");
}
