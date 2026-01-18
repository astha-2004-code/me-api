const API_BASE = "http://localhost:3000";

// Load profile
async function loadProfile() {
  const res = await fetch(`${API_BASE}/profile`);
  const data = await res.json();

  document.getElementById("profile").innerHTML = `
    <div class="card">
      <strong>Name:</strong> ${data.name}<br/>
      <strong>Email:</strong> ${data.email}<br/>
      <strong>Education:</strong> ${data.education}
    </div>
  `;
}

// Load all projects
async function loadProjects() {
  const res = await fetch(`${API_BASE}/projects`);
  const projects = await res.json();
  renderProjects(projects);
}

// Search projects
async function search() {
  const q = document.getElementById("searchInput").value;
  if (!q) return loadProjects();

  const res = await fetch(`${API_BASE}/search?q=${q}`);
  const projects = await res.json();
  renderProjects(projects);
}

// Render projects
function renderProjects(projects) {
  const container = document.getElementById("projects");
  container.innerHTML = "";

  if (projects.length === 0) {
    container.innerHTML = "<p>No projects found</p>";
    return;
  }

  projects.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <strong>${p.title}</strong>
        <p>${p.description}</p>
      </div>
    `;
  });
}

// Initial load
loadProfile();
loadProjects();
