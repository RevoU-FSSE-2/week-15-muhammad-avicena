import { expect } from "chai";
import request from "supertest";
import app from "../../app";

describe("server checks", function () {
  it("server runs correctly", function (done) {
    request(app).get("/").expect(200, done);
  });
});
