import express from "express";
import config from "config";
import mongoose from "mongoose";
import { errorHandler } from "./middlewares/errorHandler.js";
import mainRouter from "./routes/index.routes.js";

const app = express();
const PORT = config.get("port");

app.use(express.json());
app.use("/api", mainRouter);
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});
app.use(errorHandler);

(async () => {
  try {
    await mongoose.connect(config.get("dbUri"));
    console.log("MongoDB connected");

    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Connection error:", err.message);
    process.exit(1);
  }
})();
