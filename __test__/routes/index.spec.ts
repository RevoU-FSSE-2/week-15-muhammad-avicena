import request from "supertest";
import app from "../../app";

describe("auth checks", function () {
  it("auth runs correctly", function (done) {
    request(app).get("/api/v1/auth").expect(200, done);
  });
});
