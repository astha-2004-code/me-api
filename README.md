# me-api

A simple RESTful API built with **Node.js**, **Express**, and **MySQL** to serve profile data, projects, and search functionality. This API is suitable for powering a personal portfolio website or similar applications.

---

## ✨ Features

* Express-based REST API
* MySQL database integration
* Environment variable configuration with dotenv
* CORS enabled
* Modular route structure
* Health check endpoint

---

## 📦 Tech Stack

* Node.js
* Express
* MySQL (via mysql2)
* dotenv
* cors

---

## 📁 Project Structure

```
me-api/
├─ src/
│  ├─ index.js          # App entry point
│  ├─ db.js             # MySQL connection
│  ├─ seed.js           # Database seeding script
│  └─ routes/
│     ├─ profile.js     # /profile routes
│     ├─ projects.js    # /projects routes
│     └─ search.js      # /search routes
├─ package.json
└─ README.md
```

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd me-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```env
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   DB_PORT=3306
   ```

4. **Start the server**

   ```bash
   npm start
   ```

The server will run on **[http://localhost:3000](http://localhost:3000)**

---

## 🔍 API Endpoints

### Health Check

```
GET /health
```

Response:

```json
{ "status": "OK" }
```

---

### Profile

```
GET /profile
```

Returns a single profile record.

---

### Projects

```
GET /projects
```

Returns a list of projects.

---

### Search

```
GET /search?q=keyword
```

Searches across profile and project data using the query parameter `q`.

---

## 🗄️ Database

This project uses **MySQL**. Ensure the required tables (`profile`, `projects`, etc.) exist before running the API. You can use `src/seed.js` as a starting point for seeding data.

---

## 🚀 Scripts

* `npm start` – Start the server
* `nodemon src/index.js` – Run in development mode (if configured)

---

## 🛡️ License

ISC

---

## 🙌 Notes

* `node_modules` should not be committed in production repositories.
* Designed for personal or small-scale API usage.

Feel free to customize and extend this API to fit your needs!
