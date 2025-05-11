import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import config from "./config/index.js";
import mainRouter from "./routes/index.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(helmet());
app.use(express.json());

if (config.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api", mainRouter);

app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorHandler);

(async () => {
  try {
    await mongoose.connect(config.dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (config.NODE_ENV === "development") {
      console.log("✅ MongoDB connected");
    }

    app.listen(config.PORT, () => {
      if (config.NODE_ENV === "development") {
        console.log(`🚀 Server running at http://localhost:${config.PORT}`);
      }
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
})();
