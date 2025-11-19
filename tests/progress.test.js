const request = require("supertest");
const app = require("../src/app");

const db = require("../src/db");

beforeAll(async () => {
  await db.sync({ force: true });
});

describe("Progress API", () => {

  let token = null;

  beforeAll(async () => {
    // Crear usuario para pruebas
    await request(app)
      .post("/auth/register")
      .send({
        email: "progress_test@example.com",
        password: "123456"
      });

    // Login para obtener token
    const res = await request(app)
      .post("/auth/login")
      .send({
        email: "progress_test@example.com",
        password: "123456"
      });

    token = res.body.token;
  });

  it("Debe devolver datos de progreso semanal", async () => {
    const res = await request(app)
      .get("/progress/weekly")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("progress");
  });

});

