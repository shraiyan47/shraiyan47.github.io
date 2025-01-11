// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            populateAbout(data.about);
            populateSkills(data.skills);
            populateProjects(data.projects);
        })
        .catch(error => console.error("Error loading JSON data:", error));
});

function populateAbout(about) {
    document.getElementById("about-description").textContent = about;
}

function populateSkills(skills) {
    const skillsList = document.getElementById("skills-list");
    skills.forEach(skill => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
}

function populateProjects(projects) {
    const projectsContainer = document.getElementById("projects-container");
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "View Project";
        link.target = "_blank";

        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(link);
        projectsContainer.appendChild(projectCard);
    });
}
