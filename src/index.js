import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import profileRoutes from "./routes/profile.js";
import projectRoutes from "./routes/projects.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/profile", profileRoutes);
app.use("/projects", projectRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
