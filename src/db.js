const { Sequelize } = require("sequelize");

let sequelize;

if (process.env.NODE_ENV === "test") {
  console.log("🧪 Usando SQLite en memoria para tests");
  sequelize = new Sequelize("sqlite::memory:", { logging: false });
} else if (process.env.DATABASE_URL) {
  console.log("🔌 Conectando con DATABASE_URL...");

  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
  });

} else {
  console.log("🔌 Conectando con variables individuales...");

  sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      dialect: "postgres",
      logging: false,
    }
  );
}

// Intentar conexión (solo fuera de test)
if (process.env.NODE_ENV !== "test") {
  (async () => {
    try {
      await sequelize.authenticate();
      console.log("✅ Conectado correctamente a Postgres");
      await sequelize.sync();
    } catch (err) {
      console.error("❌ Error conectando a Postgres:", err);
    }
  })();
}

module.exports = sequelize;

