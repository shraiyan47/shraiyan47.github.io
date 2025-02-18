// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  // Track whether the menu is open or closed
  let isMenuOpen = false;

  // Toggle the menu on hamburger click
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active"); // Toggle "active" class
    isMenuOpen = !isMenuOpen; // Change the state of the menu

    // Optionally log to check if it's opening or closing
    console.log(isMenuOpen ? "Menu opened" : "Menu closed");
  });

  // Close the menu if the user clicks outside of the menu
  document.addEventListener("click", (event) => {
    if (
      !nav.contains(event.target) &&
      !hamburger.contains(event.target) &&
      isMenuOpen
    ) {
      nav.classList.remove("active");
      isMenuOpen = false; // Reset the state of the menu
      console.log("Menu closed by clicking outside");
    }
  });

  // Add loading indicators
  const sections = ['about', 'skills', 'projects', 'experience', 'education'];
  sections.forEach(section => {
    const element = document.getElementById(`${section}-container`) || document.getElementById(`${section}-description`) || document.getElementById(`${section}-list`);
    if (element) {
      element.innerHTML = '';
    }
  });

  // fetch("data.json")
  fetch("https://raw.githubusercontent.com/shraiyan47/shraiyan47.github.io/main/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json().catch((error) => {
        throw new Error("Invalid JSON: " + error.message);
      });
    })
    .then((data) => {
      populateAbout(data.about);
      populateSkills(data.skills);
      populateProjects(data.projects);
      populateExperience(data.experience);
      populateEducation(data.education);
      populateGallery(data.gallery); // Add this line
    })
    .catch((error) => {
      console.error("Error loading JSON data:", error);
      // Show error message on page
      sections.forEach(section => {
        const element = document.getElementById(`${section}-container`) || document.getElementById(`${section}-description`) || document.getElementById(`${section}-list`);
        if (element) {
          element.innerHTML = 'Error loading content. Please ensure you\'re running this site through a web server.';
        }
      });
    });
});

function copyProfileLink() {
  // Get the current URL
  const currentUrl = window.location.href;

  // Create a temporary input element to hold the URL
  const tempInput = document.createElement("input");
  tempInput.value = currentUrl;
  document.body.appendChild(tempInput);

  // Select and copy the URL
  tempInput.select();
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Optionally, display a success message
  alert("Profile link copied to clipboard!");
}

function gotogithub() {
  window.open("https://github.com/shraiyan47", "_blank");
}

function downloadCV() {
  const fileUrl = "./Resume Of Shahadat Hossain.pdf"; // Replace with the actual path to your file
  const fileName = "Resume Of Shahadat Hossain - 01859506936.pdf"; // Replace with the desired file name

  // Create an anchor element
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = fileName; // This triggers the download
  document.body.appendChild(a); // Append the anchor element to the body
  a.click(); // Simulate a click to start the download
  document.body.removeChild(a); // Remove the anchor element after the download is triggered
}

/**
 * Populates the "About" section with the provided description.
 * @param {string} about - The description text to be displayed in the "About" section.
 */
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
    eduCard.classList.add("edu-card", "shadow",
      "border",
      "hover-effect",
      "bg-light");

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

function populateGallery(gallery) {
  const galleryContainer = document.getElementById("gallery-container");
  galleryContainer.innerHTML = ''; // Clear existing content

  gallery.data.forEach(project => {
    const projectSection = document.createElement("div");
    projectSection.classList.add("gallery-project");
    
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.project_name;
    projectSection.appendChild(projectTitle);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("gallery-images");

    project.images.forEach(imagePath => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("gallery-image-wrapper");
      
      const image = document.createElement("img");
      image.src = imagePath;
      image.alt = `${project.project_name} screenshot`;
      image.loading = "lazy"; // Add lazy loading
      
      // Add click handler for full-size view
      imageWrapper.addEventListener('click', () => {
        const fullView = document.createElement("div");
        fullView.classList.add("gallery-fullview");
        const fullImage = image.cloneNode();
        fullView.appendChild(fullImage);
        
        fullView.addEventListener('click', () => {
          fullView.remove();
        });
        
        document.body.appendChild(fullView);
      });

      imageWrapper.appendChild(image);
      imageContainer.appendChild(imageWrapper);
    });

    projectSection.appendChild(imageContainer);
    galleryContainer.appendChild(projectSection);
  });
}

window.onscroll = function () {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  let pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // Show button after scrolling past 25% of the page height
  if (scrollPosition > pageHeight * 0.25) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
};

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
