// Use relative paths from the public folder for Vite
// Use string paths that reference the public folder

// Helper function for GitHub Pages compatibility
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/portfolio' : '';

export const getImagePath = (path) => {
  // Remove any leading slashes
  const cleanPath = path.replace(/^\//, '');
  return `${basePath}/${cleanPath}`;
};

export const projects = [
  {
    id: 1,
    title: "InfraTrack",
    description: "A group project utilizing machine learning to analyze images of road issues like potholes and broken streetlights. Developing with Flutter for mobile and Spring Boot for the backend, ensuring seamless issue reporting and validation.",
    technologies: ["Flutter", "Spring Boot", "Machine Learning"],
    period: "Sep 2024 - Present",
    image: getImagePath('assets/images/projects/infratrack.png'),
    featured: true,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 2,
    title: "Dice Duel – Mobile Game",
    description: "A Kotlin-based Android game where a human player competes against AI in a strategic dice-rolling challenge. Features include randomized dice rolls, rerolls, score tracking, and AI decision-making for an engaging gameplay experience.",
    technologies: ["Kotlin", "Android", "AI"],
    period: "Feb 2025 - Present",
    image: getImagePath('assets/images/projects/DiceRoller.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 3,
    title: "TaskMaster – Task Management App",
    description: "A full-stack task management application with an interactive dashboard, progress tracking, and secure authentication. Built using React, Tailwind CSS, Node.js, Express, and MySQL for scalability and efficiency.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    period: "Feb 2025 - Present",
    image: getImagePath('assets/images/projects/TaskMaster.jpg'),
    featured: true,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 4,
    title: "RanZz – Travel Webpage",
    description: "A visually engaging travel webpage built with HTML, CSS, and JavaScript, designed to showcase destinations with images, descriptions, and useful travel information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    period: "Jan 2025 - Present",
    image: getImagePath('assets/images/projects/RanZz.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 5,
    title: "Botanicare – Plant Care Webpage",
    description: "Expanding HCI project into a React-based plant care webpage, allowing users to search for plants and access care tips. Designed with a simple, intuitive, and responsive interface for better experience.",
    technologies: ["React", "HCI", "UI/UX"],
    period: "Jan 2025 - Present",
    image: getImagePath('assets/images/projects/BotaniCareWEB.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 6,
    title: "RecipeZ – AI-Powered Recipe Finder (Prototype)",
    description: "Designed an AI-driven recipe discovery prototype in Figma, enabling users to input ingredients and receive tailored recipe suggestions with a clean, intuitive interface.",
    technologies: ["Figma", "UI/UX", "AI"],
    period: "Jan 2025 - Present",
    image: getImagePath('assets/images/projects/recipez.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 7,
    title: "AuraSync – Mood-Based App (Prototype)",
    description: "Designed the UI/UX in Figma for a mood-tracking app that helps users manage emotional well-being through an intuitive, interactive interface.",
    technologies: ["Figma", "UI/UX"],
    period: "Feb 2025 - Feb 2025",
    image: getImagePath('assets/images/projects/AuraSync.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 8,
    title: "Weather Forecast Webpage",
    description: "A responsive weather app using the OpenWeatherMap API, featuring live updates, dynamic video backgrounds, and an interactive UI built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    period: "Feb 2025 - Feb 2025",
    image: getImagePath('assets/images/projects/Weather.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 9,
    title: "Botanicare – Plant Care Assistant (Prototype)",
    description: "Designed a mobile plant care prototype in Figma, featuring a plant identifier, disease analyzer, and personalized care tips for a seamless user experience.",
    technologies: ["Figma", "UI/UX", "HCI"],
    period: "Dec 2024 - Jan 2025",
    image: getImagePath('assets/images/projects/BotanicarePrototype.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 10,
    title: "Real-Time Ticketing System",
    description: "Developed a Real-Time Event Ticketing System using Angular for the frontend, Spring Boot for the backend, and MySQL for database management, ensuring efficient ticket operations and a seamless user experience.",
    technologies: ["Angular", "Spring Boot", "MySQL"],
    period: "Oct 2024 - Dec 2024",
    image: getImagePath('assets/images/projects/Ticket.jpg'),
    featured: true,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 11,
    title: "Plane Management System",
    description: "Developed a Java application for plane ticket reservations, cancellations, seat allocations, and customer management, featuring a user-friendly interface to streamline booking, modifying, and monitoring workflows.",
    technologies: ["Java", "Software Development"],
    period: "Feb 2024 - Mar 2024",
    image: getImagePath('assets/images/projects/planeManagement.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 12,
    title: "EqualityEcho Website",
    description: "Designed and developed a responsive website using HTML, CSS, and JavaScript, based on SDG 5, with user-friendly navigation, interactive elements for engagement, and optimization for mobile and desktop compatibility.",
    technologies: ["HTML", "CSS", "JavaScript"],
    period: "Feb 2024 - Apr 2024",
    image: getImagePath('assets/images/projects/EqualityEcho.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  },
  {
    id: 13,
    title: "Student Record System",
    description: "Developed a Python-based system for tracking and managing student grades, featuring functionalities for adding grades, organizing them in lists, and visualizing data in histograms, with accuracy verified through thorough testing.",
    technologies: ["Python", "Software Development"],
    period: "Oct 2023 - Dec 2023",
    image: getImagePath('assets/images/projects/recordsystem.jpg'),
    featured: false,
    demoLink: null,
    repoLink: null,
    detailsLink: true
  }
];
  // Certifications data
  export const certifications = [
    {
      id: 1,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI, Stanford",
      date: "Ongoing",
      category: "Machine Learning & AI",
      credentialId: null,
      credentialURL: null
    },
    {
      id: 2,
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI, Stanford",
      date: "Ongoing",
      category: "Machine Learning & AI",
      credentialId: null,
      credentialURL: null
    },
    {
      id: 3,
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI, Stanford",
      date: "Ongoing",
      category: "Machine Learning & AI",
      credentialId: null,
      credentialURL: null
    },
    {
      id: 4,
      title: "Artificial Intelligence Foundations: Machine Learning",
      issuer: "LinkedIn",
      date: "Feb 2025",
      category: "Machine Learning & AI",
      credentialId: null,
      credentialURL: null
    },
    {
      id: 5,
      title: "Kotlin for Android: Best Practices",
      issuer: "LinkedIn",
      date: "Feb 2025",
      category: "Frameworks & Languages",
      credentialId: null,
      credentialURL: null
    },
    {
        id: 6,
        title: "Node.js Essential Training",
        issuer: "LinkedIn",
        date: "Feb 2025",
        category: "Frameworks & Languages",
        credentialId: null,
        credentialURL: null
      },
      {
        id: 7,
        title: "Figma Essential Training: The Basics",
        issuer: "LinkedIn",
        date: "Jan 2025",
        category: "Design",
        credentialId: null,
        credentialURL: null
      },
      {
        id: 8,
        title: "Spring Boot 2.0 Essential Training",
        issuer: "LinkedIn",
        date: "Dec 2024",
        category: "Frameworks & Languages",
        credentialId: null,
        credentialURL: null
      },
      {
        id: 9,
        title: "Learning Spring 6 with Spring Boot 3",
        issuer: "LinkedIn",
        date: "Nov 2024",
        category: "Frameworks & Languages",
        credentialId: null,
        credentialURL: null
      },
      {
        id: 10,
        title: "Angular Essential Training",
        issuer: "LinkedIn",
        date: "Nov 2024",
        category: "Frameworks & Languages",
        credentialId: null,
        credentialURL: null
      },
      {
        id: 11,
        title: "React Essential Training",
        issuer: "LinkedIn",
        date: "Nov 2024",
        category: "Frameworks & Languages",
        credentialId: null,
        credentialURL: null
      },
      {
        id: 12,
        title: "Git Essential Training",
        issuer: "LinkedIn",
        date: "Feb 2025",
        category: "Tools",
        credentialId: null,
        credentialURL: null
      },
      {
        id: 13,
        title: "Postman API Fundamentals Student Expert",
        issuer: "Postman",
        date: "Feb 2025",
        category: "Tools",
        credentialId: null,
        credentialURL: null
      },
      {
        id: 14,
        title: "Cambridge English: Advanced (CAE)",
        issuer: "Cambridge University, UK",
        date: "June 2024",
        category: "Language",
        credentialId: null,
        credentialURL: null
      }
    ];