fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const app = document.getElementById("app");

    app.innerHTML = `
      <h1>${data.name}</h1>
      <h2>${data.title}</h2>
      <p>${data.location}</p>
      <p><a href="mailto:${data.email}">${data.email}</a> | 
         <a href="${data.linkedin}" target="_blank">LinkedIn</a></p>

      <div class="section">
        <h3>Summary</h3>
        <p>${data.summary}</p>
      </div>

      <div class="section">
        <h3>Education</h3>
        ${data.education.map(e => `
          <p><strong>${e.school}</strong><br>
          ${e.degree} (${e.years})</p>
        `).join("")}
      </div>

      <div class="section">
        <h3>Experience</h3>
        ${data.experience.map(exp => `
          <p><strong>${exp.role} @ ${exp.company}</strong><br>
          ${exp.duration}</p>
          <ul>
            ${exp.details.map(d => `<li>${d}</li>`).join("")}
          </ul>
        `).join("")}
      </div>

      <div class="section">
        <h3>Leadership & Involvement</h3>
        <ul>
          ${data.leadership.map(l => `<li>${l}</li>`).join("")}
        </ul>
      </div>

      <div class="section">
        <h3>Skills</h3>
        <ul>
          ${data.skills.map(s => `<li>${s}</li>`).join("")}
        </ul>
      </div>

      <div class="section">
        <h3>Interests</h3>
        <ul>
          ${data.interests.map(i => `<li>${i}</li>`).join("")}
        </ul>
      </div>
    `;
  });