import { link } from "fs";

export const portfolioData = {
  personal: {
    name: "Shahadat Hossain",
    title: "Software Engineer | Frontend & Full-Stack Developer",
    location: "Dhaka, Bangladesh",
    phone: "+8801859506936",
    email: "shraiyan47@gmail.com",
    linkedin: "https://linkedin.com/in/shahadat-hossain47/",
    github: "https://github.com/shraiyan47",
    summary:
      "Software Engineer with 4+ years of experience designing, developing, and maintaining web applications using modern JavaScript frameworks and full-stack technologies. Strong expertise in React.js, Next.js, Node.js, Express.js, and PHP. Proven ability to work with international clients, remote teams, and cross-functional stakeholders. Experienced in performance optimization, REST API integration, database design, and scalable application architecture.",
  },
  skills: {
    frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript (ES6+)"],
    backend: ["Node.js", "Express.js", "PHP", "Python"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    state_management: ["Redux", "Zustand"],
    architecture_and_tools: ["RESTful APIs", "MERN Stack", "MVC", "Git", "Agile/Scrum"],
    other: ["Image Optimization", "Performance Tuning", "Machine Learning Basics", "Face Detection"],
  },
  experience: [
    {
      role: "Software Engineer, (IT Department & Consultancy)",
      company: "IMS Services, Dhaka",
      dates: "February 2025 — March 2026",
      description:
        "Developing and maintaining web applications using the MERN stack. Building internal student management software with REST API integration. Maintaining clean, modular, production-ready code.",
    },
    {
      role: "Software Engineer, (ODS Department)",
      company: "Fintech Hub Limited, Dhaka",
      dates: "June 2024 — February 2025",
      description:
        "Developed frontend applications using Next.js and backend services using Node.js/Express.js. Improved performance through image optimization and global state refactoring, reducing unnecessary re-renders.",
    },
    {
      role: "Software Engineer, (DI Department)",
      company: "LEADS Corporation Limited, Dhaka",
      dates: "June 2021 — June 2024",
      description:
        "Frontend engineer for a SAAS-based recruitment and assessment platform. Developed a secure online exam engine with AI camera-based cheating prevention. Managed complex application state using Redux and Zustand.",
    },
    {
      role: "PHP Developer",
      company: "Zaimah Technology Limited, Dhaka",
      dates: "February 2020 — May 2021",
      description:
        "Developed web-based ERP and inventory management systems using raw PHP and MySQL. Led development of a cattle management system with role-based workflows.",
    },
    {
      role: "Remote Software Engineer",
      company: "USA Clients",
      dates: "Ongoing",
      description:
        "Developed donation platforms, campaign management systems, and school assessment portals using React.js and Next.js. Communicated directly with international stakeholders.",
    },
  ],
  projects: [
    {
      name: "Nakhlah — Arabic Language Learning",
      description:
        "Managed global state and optimized data flow, reducing re-renders by 30% and improving UX by 50%.",
      tech: ["Next.js", "Redux", "Zustand"],
      size: "large",
      link: "https://uat.nakhlah.net",
    },
    {
      name: "RecruitGenie — Smart Recruitment",
      description:
        "Led development of an exam engine and cheating-prevention system with AI camera integration, delivering 80% of the UI.",
      tech: ["React", "API Integration"],
      size: "medium",
      link: "https://www.youtube.com/watch?v=a_R_X9ynBCw",
    },
    {
      name: "YCH — Assessment Portal",
      description:
        "Built a student progress tracker with QR login and multistep assessments.",
      tech: ["Frontend"],
      size: "small",
      link: "https://vehayamachanechakadosh.com/",

    },
    {
      name: "GivingAMP — Donation Platform",
      description:
        "Developed donation and campaign platforms with landing pages, event management, and payment flows.",
      tech: ["Full-Stack"],
      size: "small",
      link: "https://givingamp.com/home/",

    },
    {
      name: "IMS Services — Student Management Software",
      description:
        "Built internal student management software with REST API integration, improving administrative efficiency.",
      tech: ["Full-Stack"],
      size: "small",
      link: "https://imsservicesbd.com/",

    },
  ],
  education: [
    {
      degree: "B.Sc in Software Engineering",
      institution: "Daffodil International University",
      year: "2019",
    },
  ],
  certifications: [
    "AI and Data Science — BASIS (Built cash flow prediction and voice synthesis using Python)",
    "IELTS — British Council (Score: 6)",
  ],
}
