const request = require("supertest");
const app = require("../src/app");

const db = require("../src/db");

beforeAll(async () => {
  await db.sync({ force: true });
});

describe("Autenticación", () => {

  it("Debe registrar un usuario nuevo", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({
        email: "test_unit@example.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("user");
    expect(res.body.user.email).toBe("test_unit@example.com");
  });

  it("Debe iniciar sesión", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({
        email: "test_unit@example.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

});

