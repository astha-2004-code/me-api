import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM profile LIMIT 1"
    );

    if (!rows || rows.length === 0) {
      return res.status(404).json({ error: "No profile found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("PROFILE ERROR:", error);
    res.status(500).json({ error: "Profile API failed" });
  }
});

export default router;