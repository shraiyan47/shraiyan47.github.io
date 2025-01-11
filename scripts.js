// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  var x = 1;
  hamburger.addEventListener("click", () => {
    console.log(nav.classList.value);
    if(x == 1){
        nav.classList.toggle("");
        x = 0;
    }else{
        nav.classList.toggle("active");
        x = 1;
    }
  });

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      populateAbout(data.about);
      populateSkills(data.skills);
      populateProjects(data.projects);
      populateExperience(data.experience);
      populateEducation(data.education);
    })
    .catch((error) => console.error("Error loading JSON data:", error));
});

function populateAbout(about) {
  document.getElementById("about-description").textContent = about;
}

function populateSkills(skills) {
  const skillsList = document.getElementById("skills-list");
  skills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });
}

function populateProjects(projects) {
  const projectsContainer = document.getElementById("projects-container");
  projects.forEach((project) => {
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

function populateExperience(experience) {
  const experienceContainer = document.getElementById("experience-container");
  experience.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add(
      "job-card",
      "shadow",
      "border",
      "hover-effect",
      "bg-light"
    );

    const title = document.createElement("h3");
    title.textContent = `${job.title} - ${job.company}`;
    title.classList.add("job-title");

    const duration = document.createElement("p");
    duration.textContent = job.duration;
    duration.classList.add("job-duration");

    const description = document.createElement("p");
    description.textContent = job.description;
    description.classList.add("job-description");

    jobCard.appendChild(title);
    jobCard.appendChild(duration);
    jobCard.appendChild(description);
    experienceContainer.appendChild(jobCard);
  });
}

function populateEducation(education) {
  const educationContainer = document.getElementById("education-container");
  education.forEach((edu) => {
    const eduCard = document.createElement("div");
    eduCard.classList.add("edu-card", "shadow", "border", "bg-light");

    const degree = document.createElement("h3");
    degree.textContent = edu.degree || edu.certificate;
    degree.classList.add("edu-degree");

    const institution = document.createElement("p");
    institution.textContent = edu.institution;
    institution.classList.add("edu-institution");

    const year = document.createElement("p");
    year.textContent = `Year: ${edu.year}`;
    year.classList.add("edu-year");

    const description = document.createElement("p");
    description.textContent = edu.description;
    description.classList.add("edu-description");

    eduCard.appendChild(degree);
    eduCard.appendChild(institution);
    eduCard.appendChild(year);
    eduCard.appendChild(description);
    educationContainer.appendChild(eduCard);
  });
}


window.onscroll = function() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Show button after scrolling past 25% of the page height
    if (scrollPosition > pageHeight * 0.25) {
        document.getElementById("goToTopBtn").style.display = "block";
    } else {
        document.getElementById("goToTopBtn").style.display = "none";
    }
};

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
