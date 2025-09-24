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
  sehatUP,
  APMobility,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import Aurapulse from "../assets/Aurapulse.png";
import BTechLib from "../assets/B.Tech.png";
import Synex from "../assets/Synex.png";
import H2OSync from "../assets/H2O.jpg";

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
    company_name: "AP Mobility India Pvt Ltd",
    icon: APMobility,
    iconBg: "#ffff",
    date: "Jul 2024 – Aug 2024",
    points: [
      "Developed responsive web apps with React.js, HTML, CSS, and JS.",
      "Integrated Bootstrap UI, boosting engagement on mobile devices.",
      "Collaborated in a hybrid team to deliver client-ready demos on time.",
      "Applied best practices for performance and cross-browser support.",
    ],
  },
  {
    title: "Shopify & Full Stack Developer Intern",
    company_name: "sehatUP",
    icon: sehatUP,
    iconBg: "#ffff",
    date: "May 2025 – Aug 2025",
    points: [
      "Created custom Shopify themes and reusable UI components.",
      "Integrated Firebase for auth, database, and live updates.",
      "Built an internal quiz + dashboard system for seminars.",
      "Optimized UI responsiveness across devices and browsers.",
      "Automated workflows, reducing manual tasks for the team.",
      "Converted complex requirements into scalable solutions.",
    ],
  },
  {
    title: "Shopify & Full Stack Developer",
    company_name: "sehatUP",
    icon: sehatUP,
    iconBg: "#ffff",
    date: "Aug 2025 – Present",
    points: [
      "Leading development of secure login with role-based access.",
      "Engineering scalable Shopify storefronts with optimized flows.",
      "Enhancing seminar dashboard with analytics and scoring tools.",
      "Building automation scripts to streamline team workflows.",
      "Driving adoption of Git workflows, reviews, and responsive design.",
      "Collaborating cross-functionally for smooth feature rollouts.",
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
    name: "AuraPulse – AI Mood Music Recommender",
    description:
      "AI system achieving 71%+ accuracy in mood detection with CNN, generating personalized playlists in real time.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: Aurapulse,
    source_code_link: "https://github.com/shivangrastogi/Final-Year-Project.git",
  },
  {
    name: "H2O Sync – Water Issue Reporting App",
    description:
      "Android app with Maps API + Firebase, enabling citizens to report civic water issues with geotagged photos.",
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
      "Responsive portal offering categorized study notes, resources, and exam prep guides for students.",
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
      "Voice-controlled assistant with PyQt5 UI, automating daily tasks, fetching data, and API integration.",
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
      "IoT-based Arduino solution detecting unstable soil and sending instant SMS alerts via sensors + wireless modules.",
    tags: [
      { name: "arduino", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "smsapi", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shivangrastogi/Landslide-Detection.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
