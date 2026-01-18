import { db } from "./db.js";

await db.query(
  `INSERT INTO profile (name, email, education)
   VALUES (?, ?, ?)`,
  ["Astha Jha", "asthajha0613@gmail.com", "B.Tech ECE, NIT Delhi (2023–2027)"]
);

await db.query(`
INSERT INTO skills (name) VALUES
('C'), ('C++'), ('JavaScript'), ('Python'),
('HTML'), ('CSS'), ('React'),
('Node.js'), ('Express.js'), ('MongoDB'), ('SQL');
`);

await db.query(`
INSERT INTO projects (title, description) VALUES
('Weather Monitoring Website', 'Weather dashboard using HTML, CSS, JavaScript'),
('React To-Do List', 'Task management app using React'),
('Blood Bridge', 'Full-stack MERN blood donation platform');
`);

console.log("Database seeded successfully");
process.exit();