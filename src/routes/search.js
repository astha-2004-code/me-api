import express from "express";
import { db } from "../db.js";

const router = express.Router();

/**
 * GET /search?q=keyword
 */
router.get("/", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Query parameter q is required" });
  }

  try {
    const [rows] = await db.query(
      `
      SELECT DISTINCT p.id, p.title, p.description
      FROM projects p
      LEFT JOIN project_skills ps ON p.id = ps.project_id
      LEFT JOIN skills s ON ps.skill_id = s.id
      WHERE
        p.title LIKE ?
        OR p.description LIKE ?
        OR s.name LIKE ?
      `,
      [`%${q}%`, `%${q}%`, `%${q}%`]
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Search failed" });
  }
});

export default router;