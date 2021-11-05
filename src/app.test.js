const request = require("supertest");
const app = require("./app");

test("exchage-rate", async () => {
  const res = await request(app).get("/exchange-rate");

  expect(res.body).toEqual({
    dollar: expect.any(Number),
    euro: expect.any(Number),
  });
});
