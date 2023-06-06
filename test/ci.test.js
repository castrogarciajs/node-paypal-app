import Application from "../app/app.js";
import request from "supertest";
import { PORT } from "../setup.js";

let server;

beforeEach(() => {
  server = Application.listen(PORT);
});

afterAll(() => {
  server.close();
});

test("should return status 404", async () => {
  const res = await request(Application).get("/");

  expect(res.status).toBe(404);
  expect(res.status).not.toBe(200);
});
