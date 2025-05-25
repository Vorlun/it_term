import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import exphbs from "express-handlebars";

import config from "./config/index.js";
import apiRouter from "./routes/index.routes.js";
import viewRouter from "./routes/views.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

const app = express();

// Security middlewares
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.static("views"));

// Logging only in development
if (config.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Template Engine
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

// Routes
app.use("/", viewRouter); // Frontend
app.use("/api", apiRouter); // Backend API

// 404 middleware
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Error handler
app.use(errorHandler);

// Connect to DB and run server
const PORT = config.PORT || 3000;
(async () => {
  try {
    await mongoose.connect(config.dbUri);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
})();
