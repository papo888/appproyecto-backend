const sequelize = require("../src/db");

jest.setTimeout(10000);

beforeAll(async () => {
  await sequelize.sync({ force: true });  // CREA TABLAS
});

afterAll(async () => {
  await sequelize.close(); // CIERRA SQLITE
});

