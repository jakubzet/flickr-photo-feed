/* global ENV_DEV_NAME, ENV_PROD_NAME */
const request = require("supertest");
const server = require("../server");
const { handleListen, initializeServer } = server;

describe("handleListen", () => {
  it("Throws when listener receives error argument", () => {
    expect(() => handleListen(new Error())).toThrow();
  });

  it("Does not throw when listener does not receive error argument", () => {
    expect(() => handleListen()).not.toThrow();
  });
});

describe("initializeServer", () => {
  it("Throws when not in development mode", () => {
    expect(() => {
      initializeServer(ENV_PROD_NAME);
    }).toThrow();
  });

  it("Does not throw when in development mode", () => {
    expect(() => {
      const serverInstance = initializeServer(ENV_DEV_NAME);
      serverInstance.close();
    }).not.toThrow();
  });
});

describe("API endpoints", () => {
  let serverInstance;

  beforeEach(() => {
    serverInstance = initializeServer(ENV_DEV_NAME);
  });

  afterEach(() => {
    serverInstance.close();
  });

  it("GET /api", async () => {
    const res = await request(serverInstance).get("/api");
    expect(res.statusCode).toEqual(200);
  });
});
