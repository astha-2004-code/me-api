import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { skill } = req.query;

    let query = `
      SELECT DISTINCT p.id, p.title, p.description
      FROM projects p
    `;
    let params = [];

    if (skill) {
      query += `
        JOIN project_skills ps ON p.id = ps.project_id
        JOIN skills s ON s.id = ps.skill_id
        WHERE s.name LIKE ?
      `;
      params.push(`%${skill}%`);
    }

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Projects API failed" });
  }
});

export default router;