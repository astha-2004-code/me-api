# Me API Playground

This project is a backend-focused application that exposes my personal profile, skills, and projects through REST APIs.

The idea behind this project is simple: instead of treating my resume as a static document, I modelled it as an API. All information is stored in a database and served through clean, readable endpoints.

The project is intentionally kept simple, with the main focus on backend development, database design, and API functionality rather than UI design.

---

## Tech Stack

- Backend: Node.js, Express  
- Database: MySQL  
- Frontend: HTML, CSS, JavaScript  
- Version Control: Git and GitHub  

---

## Architecture Overview

Frontend (HTML + JavaScript)
↓
Express REST API
↓
MySQL Database


The frontend only consumes APIs. All business logic and data handling are done in the backend.

---

## Database Design

The database is designed using a relational model with the following tables:

- profile – stores personal information
- projects – stores project details
- skills – stores skills
- project_skills – maps projects to skills (many-to-many relationship)

This structure allows efficient filtering and searching of projects by skills.

---

## API Endpoints

### Health Check
GET /health


### Profile
GET /profile


### Projects
GET /projects
GET /projects?skill=react


### Search
GET /search?q=javascript


---

## Sample API Usage

```bash
curl http://localhost:3000/profile
curl http://localhost:3000/projects
curl http://localhost:3000/projects?skill=react
curl http://localhost:3000/search?q=react

Frontend

A very basic frontend is included in the frontend folder.

The frontend:

displays profile information

lists all projects

allows searching projects by skill or keyword

The purpose of the frontend is only to demonstrate API usage.

To run it:

Start the backend server

Open frontend/index.html in a browser