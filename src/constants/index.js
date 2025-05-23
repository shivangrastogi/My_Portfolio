import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import Aurapulse from "../assets/Aurapulse.png"
import BTechLib from "../assets/B.Tech.png"
import Synex from "../assets/Synex.png"
import H2OSync from "../assets/H2O.jpg"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "Java Developer",
    icon: backend,
    // icon: web,
  },
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Data Structures & Algorithms",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "AP MOBILITY INDIA PVT LTD",
    // icon: apmobilityIcon,  // add this logo to assets
    icon: meta,
    iconBg: "#383E56",
    date: "Jul 2024 – Aug 2024",
    points: [
      "Developed and maintained web applications using HTML, CSS, JavaScript, and React.js.",
      "Integrated Bootstrap for responsive UI components, enhancing user experience.",
      "Collaborated with cross-functional teams to deliver project milestones in a hybrid work environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Shivang showed exceptional skill and commitment during his internship, consistently delivering high-quality code.",
    name: "Project Supervisor",
    designation: "Team Lead",
    company: "AP Mobility India",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "His problem-solving mindset and enthusiasm made a noticeable impact on our project outcomes.",
    name: "Mentor",
    designation: "Senior Developer",
    company: "AP Mobility India",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];
const projects = [
  {
    name: "AuraPulse – AI Mood Music Recommender",
    description:
      "AI-powered system detecting user mood with over 71% accuracy using CNN and generating personalized playlists based on detected emotions and preferences.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: Aurapulse,
    source_code_link:
      "https://github.com/shivangrastogi/Final-Year-Project.git",
  },
  {
    name: "H2O Sync – Water Issue Reporting App",
    description:
      "Android app using Maps API and Firebase that allows users to report water-related civic issues with live location sharing and image upload support.",
    tags: [
      { name: "androidstudio", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "googlemapsapi", color: "pink-text-gradient" },
    ],
    image: H2OSync,
    source_code_link: "https://github.com/shivangrastogi/H2O-SYNC.git",
  },
  {
    name: "EduPortal – B.Tech Learning Platform",
    description:
      "Responsive web portal providing students with categorized study material, lecture notes, downloadable resources, and exam preparation guides.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: BTechLib,
    source_code_link: "https://github.com/shivangrastogi/btechlibrary.git",
  },
  {
    name: "Synex – Python Desktop Voice Assistant",
    description:
      "AI-based desktop assistant with PyQt5 GUI that listens to commands, automates daily tasks, fetches online data, and interacts with APIs efficiently.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pyqt5", color: "green-text-gradient" },
      { name: "multithreading", color: "pink-text-gradient" },
    ],
    image: Synex,
    source_code_link:
      "https://github.com/shivangrastogi/Synex---Personal-AI-Assistant.git",
  },
  {
    name: "GeoAlert – Landslide Warning System",
    description:
      "IoT-enabled Arduino system that detects unstable soil and sends instant SMS alerts using real-time sensors and remote wireless monitoring modules.",
    tags: [
      { name: "arduino", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "smsapi", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/shivangrastogi/Landslide-Detection.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
