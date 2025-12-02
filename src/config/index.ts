import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Joshan Pradhan — Full Stack Developer",
  author: "Joshan Pradhan",
  description:
    "Full Stack Software Engineer based in Osaka, Japan. Experienced in Node.js, NestJS, React, React Native, PostgreSQL, GraphQL, AWS, and large-scale application development.",
  lang: "en",
  siteLogo: "/joshan-big.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/joshanpradhan" },
    { text: "Github", href: "https://github.com/joshanpradhan" },
  ],
  socialImage: "/joshan-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Joshan Pradhan",
    specialty: "Full Stack Developer",
    summary:
      "Full Stack Developer based in Osaka, Japan. I specialize in backend development, mobile applications, cloud infrastructure, and building scalable systems.",
    email: "talktojoshan@gmail.com",
  },

  experience: [
    {
      company: "Nankai Express Co., Ltd",
      position: "System Engineer",
      startDate: "Aug 2025",
      endDate: "Present",
      summary: [
        "Developed and enhanced backend features for the internal Warehouse Management System using Node.js, Vue.js, PostgreSQL, and REST APIs to improve operational efficiency.",
        "Implemented new functionalities and refined existing workflows based on client and internal team requirements.",
        "Provided internal IT support, including equipment setup, system configuration, and troubleshooting technical issues to ensure smooth daily operations.",
      ],
    },
    {
      company: "Fusemachines",
      position: "Software Engineer",
      startDate: "Mar 2022",
      endDate: "Present",
      summary: [
        "Enhanced Fuse Classroom using Java (Spring Boot) and PostgreSQL, delivering system improvements, API development, and performance optimizations.",
        "Developed scalable API endpoints and optimized the online exam proctoring module for better stability and user experience.",
        "Led backend and mobile development for Stockinerary, migrating REST API to GraphQL and enabling real-time stock updates.",
        "Implemented financial data scraping from Nepse, Nepal Rastra Bank, Nepali Paisa, and Saral Lagani to deliver accurate market insights.",
        "Built features such as watchlist, portfolio management, subscription, forex, and stock alerts with push notifications.",
        "Developed an internal food coupon management system using NestJS and React Native (Expo), improving internal operations.",
        "Mentored junior developers and contributed to performance optimization across backend and mobile applications.",
        "Integrated GetStream Chat SDK, Zoom SDK, and Mixpanel Analytics into Upacare to enable real-time communication, video calls, and product analytics.",
      ],
    },
    {
      company: "Treeleaf Technologies",
      position: "Software Engineer",
      startDate: "May 2021",
      endDate: "Feb 2022",
      summary: [
        "Developed mobile applications using React Native, mastering component-based architecture, state management, and navigation.",
        "Worked on a donation app enabling seamless and secure digital donations.",
        "Utilized Redux Saga, Expo CLI, and various UI frameworks to build polished user-centric applications.",
      ],
    },
    {
      company: "APEX College",
      position: "Adjunct Faculty / Lab Assistant",
      startDate: "Apr 2023",
      endDate: "Apr 2024",
      summary: [
        "Guided students through Information Technology and Java lab sessions with hands-on support.",
        "Mentored students in minor and major academic projects from planning to execution.",
        "Managed lab environments, schedules, and equipment to ensure smooth academic operations.",
      ],
    },
  ],

  projects: [
    {
      name: "Stockinerary",
      summary:
        "A stock and portfolio management system featuring watchlists, portfolio tracking, stock alerts, subscriptions, forex data, real-time updates, and financial data scraping.",
      linkPreview: "https://stockinerary.com/",
      image: "/stockinerary.png",
    },
    {
      name: "Food Coupon Management System",
      summary:
        "An internal system built using NestJS and React Native for managing employee food coupons, vendor interactions, and real-time updates.",
      linkPreview:
        "https://play.google.com/store/apps/details?id=com.fusemachines.foodvendorapp&hl=en",
      image: "/food-coupon.png",
    },
    {
      name: "Upacare Healthcare App",
      summary:
        "A healthcare mobile app with real-time chat (GetStream), video calling (Zoom SDK), and product analytics (Mixpanel).",

      linkPreview: "https://www.upacare.com/",
      image: "/upacare.png",
    },
  ],

  about: {
    description: `
      Hi, I’m Joshan Pradhan — a passionate Full Stack Developer with strong experience in backend systems, mobile applications, and cloud technologies.
      
      I specialize in Node.js, NestJS, React, React Native, PostgreSQL, GraphQL, AWS, and scalable system architecture. Over the years, I’ve contributed to major products in EdTech, FinTech, and HealthTech, focusing on performance, reliability, and user-centered design.

      I enjoy transforming ideas into real-world applications, optimizing system performance, and collaborating across teams to create polished digital experiences. Whether it's building mobile apps, architecting backend services, or integrating third-party SDKs, I strive to deliver clean, maintainable, and impactful solutions.
    `,
    image: "/joshan-big.jpeg",
  },
};
