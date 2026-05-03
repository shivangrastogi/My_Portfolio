import {
  github,
  javascript,
  reactjs,
  git,
  python,
  tensorflow,
  opencv,
  numpy,
  pandas,
  java,
  sql,
  html,
  css,
  tailwind,
  firebase_tech,
  aeris,
  herobg,
  RAG,
  sehatUP,
  APMobility,
} from "../assets";

import Aurapulse from "../assets/Aurapulse.webp";
import H2OSync from "../assets/H2O.webp";

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
    title: "AI / ML Engineer",
    icon: python,
  },
  {
    title: "Deep Learning & CV",
    icon: reactjs,
  },
  {
    title: "Automation Specialist",
    icon: github,
  },
  {
    title: "Full-Stack Developer",
    icon: javascript,
  },
];

// Skills are grouped. AI / ML is listed first so it reads as the primary focus.
const technologies = [
  // AI / Machine Learning (primary focus)
  { name: "Python", icon: python, category: "AI / ML" },
  { name: "TensorFlow", icon: tensorflow, category: "AI / ML" },
  { name: "OpenCV", icon: opencv, category: "AI / ML" },
  { name: "NumPy", icon: numpy, category: "AI / ML" },
  { name: "Pandas", icon: pandas, category: "AI / ML" },

  // Languages
  { name: "Java", icon: java, category: "Languages" },
  { name: "SQL", icon: sql, category: "Languages" },
  { name: "JavaScript", icon: javascript, category: "Languages" },

  // Web Development
  { name: "React JS", icon: reactjs, category: "Web" },
  { name: "HTML 5", icon: html, category: "Web" },
  { name: "CSS 3", icon: css, category: "Web" },
  { name: "Tailwind", icon: tailwind, category: "Web" },
  { name: "Firebase", icon: firebase_tech, category: "Web" },

  // Tools
  { name: "Git", icon: git, category: "Tools" },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "AP Mobility India Pvt. Ltd.",
    icon: APMobility,
    iconBg: "#ffff",
    location: "Meerut, UP",
    date: "Jul 2024 – Aug 2024",
    points: [
      "Developed responsive web apps with React.js, HTML, CSS, and JS.",
      "Integrated Bootstrap UI, boosting engagement on mobile devices.",
      "Collaborated in a hybrid team to deliver client-ready demos on time.",
      "Applied best practices for performance and cross-browser support.",
    ],
  },
  {
    title: "Shopify & Full Stack Developer",
    company_name: "SehatUP",
    icon: sehatUP,
    iconBg: "#ffff",
    location: "Noida, UP",
    date: "May 2025 – Present",
    points: [
      "Built and deployed a role-based CRM system integrating real-time user health data pipelines using Firebase.",
      "Designed automated prescription generation system with backend logic and data-driven workflows.",
      "Developed structured data pipelines enabling HealthScore analytics and user tracking.",
      "Optimized full user lifecycle pipeline (User → CRM → Doctor → Prescription → Checkout).",
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

const projects = [
  {
    name: "A.E.R.I.S – AI Voice Assistant",
    description:
      "Advanced AI-based voice assistant integrating NLP, gesture recognition, and system-level command execution for seamless digital interaction.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "nlp", color: "green-text-gradient" },
      { name: "opencv", color: "pink-text-gradient" },
      { name: "automation", color: "orange-text-gradient" },
    ],
    image: aeris,
    video: "/A.E.R.I.S.webm",
    source_code_link: "https://github.com/shivangrastogi/S.Y.N.E.X",
  },

  {
    name: "AuraPulse – CNN Emotion Engine",
    description:
      "Deep learning pipeline achieving 85% accuracy in facial emotion recognition, integrated with a music recommendation engine for personalized experiences.",
    tags: [
      { name: "cnn", color: "blue-text-gradient" },
      { name: "deep-learning", color: "green-text-gradient" },
      { name: "opencv", color: "pink-text-gradient" },
    ],
    image: Aurapulse,
    source_code_link: "https://github.com/shivangrastogi/Final-Year-Project.git",
  },
  {
    name: "RAG System for YouTube Video Transcripts",
    description:
      "A Retrieval-Augmented Generation pipeline that converts YouTube video content into searchable transcript chunks, creates vector embeddings, and answers queries with timestamps and video references.",
    tags: [
      { name: "rag", color: "orange-text-gradient" },
      { name: "youtube", color: "blue-text-gradient" },
      { name: "embeddings", color: "green-text-gradient" },
      { name: "llm", color: "pink-text-gradient" },
    ],
    image: RAG,
    source_code_link: "https://github.com/shivangrastogi/RAG-based-AI-Teaching-Assistant",
  },
  {
    name: "H2O Sync – Smart Water Tracker",
    description:
      "Android application developed for Smart India Hackathon using Firebase and Google Maps API for real-time data tracking and location-based water management.",
    tags: [
      { name: "android", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "googlemaps", color: "pink-text-gradient" },
    ],
    image: H2OSync,
    source_code_link: "https://github.com/shivangrastogi/H2O-SYNC.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
