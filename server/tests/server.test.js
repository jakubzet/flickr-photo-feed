/* global ENV_DEV_NAME, ENV_PROD_NAME */
const request = require("supertest");
const server = require("../server");
const { handleListen, initServerListener } = server;

describe("handleListen", () => {
  it("Throws when listener receives error argument", () => {
    expect(() => handleListen(new Error())).toThrow();
  });

  it("Does not throw when listener does not receive error argument", () => {
    expect(() => handleListen()).not.toThrow();
  });
});

describe("initServerListener", () => {
  it("Has server methods", () => {
    const serverListener = initServerListener(ENV_DEV_NAME);

    expect(serverListener).toHaveProperty("listen");
    expect(serverListener).toHaveProperty("close");
    expect(serverListener).toHaveProperty("timeout");
    expect(serverListener.listening).toBe(true);

    serverListener.close();
  });

  it("Throws when not in development mode", () => {
    expect(() => {
      initServerListener(ENV_PROD_NAME);
    }).toThrow();
  });

  it("Does not throw when in development mode", () => {
    expect(() => {
      const serverListener = initServerListener(ENV_DEV_NAME);
      serverListener.close();
    }).not.toThrow();
  });
});

describe("API endpoints", () => {
  let serverListener;

  beforeEach(() => {
    serverListener = initServerListener(ENV_DEV_NAME);
  });

  afterEach(() => {
    serverListener.close();
  });

  it("GET /api", async () => {
    const res = await request(serverListener).get("/api");
    expect(res.statusCode).toEqual(200);
  });
});
