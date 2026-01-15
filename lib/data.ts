// src/lib/data.ts

export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  projects: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  platform: string;
  year: string;
}

export const personalInfo = {
  name: "Joshan Pradhan",
  title: "Software Engineer",
  email: "talktojoshan@gmail.com",
  phone: "+81-09021219480",
  linkedin: "https://www.linkedin.com/in/joshanpradhan",
  github: "https://github.com/joshanpradhan",
  location: "Osaka, Japan",
  bio: "Experienced Software Engineer with 4+ years specializing in full-stack development, mobile applications, and scalable backend systems. Proven track record in GraphQL migration, real-time features, and mentoring junior developers.",
};

export const skills: Skill[] = [
  {
    category: "Backend",
    items: ["Node.js", "Nest.js", "GraphQL", "REST API", "PostgreSQL"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "React Native", "TypeScript", "JavaScript"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, SES, RDS)", "Docker"],
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Native Android", "Expo"],
  },
];

export const experience: Experience[] = [
  {
    company: "Fusemachines",
    location: "New Baneshwor, Kathmandu",
    position: "Software Engineer",
    period: "March 2021 - August 2025",
    projects: ["stockinerary", "foodapp", "upacare"],
  },
  {
    company: "Treeleaf Technologies",
    location: "Shankhamul, Kathmandu",
    position: "Software Engineer",
    period: "May 2020 - February 2021",
    projects: ["donation"],
  },
  {
    company: "Apex College",
    location: "New Baneshwor, Kathmandu",
    position: "Adjunct Faculty/Lab Assistant",
    period: "April 2023 - April 2024",
    projects: [],
  },
];

export const projects: Project[] = [
  {
    id: "stockinerary",
    title: "Stockinerary",
    company: "Fusemachines",
    description:
      "Stock and Portfolio Management App for Nepali stock market with real-time data and alerts",
    highlights: [
      "Migrated REST API to GraphQL, improving data query efficiency and flexibility",
      "Developed web scraping solutions extracting data from Nepse, Nepal Rastra Bank, Nepali Paisa, and Saral Lagani",
      "Implemented watchlist, portfolio management, subscription models, Forex, and stock alert system with push notifications",
      "Collaborated with front-end team for real-time GraphQL integration",
    ],
    technologies: [
      "GraphQL",
      "Node.js",
      "PostgreSQL",
      "Web Scraping",
      "Push Notifications",
    ],
  },
  {
    id: "foodapp",
    title: "Food Coupon Management System",
    company: "Fusemachines",
    description:
      "Internal food coupon management system for streamlining expense tracking",
    highlights: [
      "Spearheaded development using Nest.js for robust backend solution",
      "Mentored junior team members on design patterns and performance optimization",
      "Designed and developed RESTful APIs for efficient data exchange",
      "Conducted UI testing and bug documentation for polished user experience",
    ],
    technologies: ["Nest.js", "TypeScript", "REST API", "PostgreSQL"],
  },
  {
    id: "upacare",
    title: "Upacare Nepal",
    company: "Fusemachines",
    description: "Healthcare mobile app enhancing patient care management",
    highlights: [
      "Developed MVP using React Native for healthcare industry",
      "Integrated GetStream Chat SDK for real-time communication",
      "Incorporated Zoom Video Call SDK for reliable video conferencing",
      "Implemented Mixpanel Analytics for user tracking and data-driven improvements",
      "Reduced post-production bugs through comprehensive testing",
    ],
    technologies: [
      "React Native",
      "GetStream SDK",
      "Zoom SDK",
      "Mixpanel",
      "Healthcare",
    ],
  },
  {
    id: "donation",
    title: "Donation App",
    company: "Treeleaf Technologies",
    description:
      "Innovative donation platform facilitating seamless and secure donations",
    highlights: [
      "Mastered React Native fundamentals including component-based development and state management",
      "Implemented Redux Saga for state management",
      "Built secure payment integration for donations",
      "Created user-centric mobile application using Expo CLI",
    ],
    technologies: [
      "React Native",
      "Redux Saga",
      "Expo CLI",
      "Payment Integration",
    ],
  },
];

export const education = [
  {
    institution: "Apex College, Pokhara University",
    degree: "Bachelor of Computer Information System",
    period: "June 2021",
    location: "New Baneshwor, Kathmandu",
    achievements: [
      "CGPA: 3.87 out of 4.0",
      "Dean's List Academic Achievement Award",
      "Class Representative (First Semester)",
    ],
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Databases",
      "Web Development",
      "Operating Systems",
      "System Analysis and Design",
    ],
  },
  {
    institution: "Amity College, HSEB Board",
    degree: "Higher Secondary Education",
    period: "November 2016",
    location: "Birtamode, Jhapa",
    achievements: [
      "Completed with Distinction",
      "Scholarship for excellent grade",
    ],
    coursework: [
      "C Programming",
      "Web Design and Development",
      "Web Technologies",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "The Complete Android 12 Developer Course",
    platform: "Udemy",
    year: "2022",
  },
  {
    title: "Nest.js: The Complete Developer Guide",
    platform: "Udemy",
    year: "2023",
  },
  {
    title: "Knowledge Sharing Session on Nest.js",
    platform: "Fusemachines",
    year: "2023",
  },
];

export const languages = ["Nepali", "Hindi", "English"];
