const express = require("express");
const cors = require("cors");
if (process.env.NODE_ENV !== "test") {
  require("dotenv").config();
}

const authRoutes = require("./routes/auth");
const progressRoutes = require("./routes/progress");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/auth", authRoutes);
app.use("/progress", progressRoutes);

// Export solo la APP (NO el server)
module.exports = app;

