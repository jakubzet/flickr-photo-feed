import apiService from "../apiService";

describe("APIService", () => {
  it("Has Axios instance defined with base URL", () => {
    expect(apiService).toBeDefined();
    expect(apiService.defaults).toBeDefined();
    expect(apiService.defaults.baseURL).toBeDefined();
  });
});
