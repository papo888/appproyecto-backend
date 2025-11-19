const { Sequelize } = require("sequelize");

let sequelize;

if (process.env.NODE_ENV === "test") {
  console.log("🧪 Usando SQLite en memoria para tests");

  sequelize = new Sequelize("sqlite::memory:", {
    logging: false
  });

  // 🟢 Sincronizar modelos antes de correr tests
  (async () => {
    await sequelize.sync({ force: true });
  })();

} else {
  console.log("🔌 Conectando a Postgres real...");

  sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
      host: process.env.POSTGRES_HOST,
      dialect: "postgres",
      logging: false,
    }
  );

  // 🟢 Sincronizar en desarrollo por si acaso
  (async () => {
    await sequelize.sync();
  })();
}

module.exports = sequelize;

