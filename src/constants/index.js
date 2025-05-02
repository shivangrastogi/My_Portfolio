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

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

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


// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const testimonials = [
  {
    testimonial: "Shivang showed exceptional skill and commitment during his internship, consistently delivering high-quality code.",
    name: "Project Supervisor",
    designation: "Team Lead",
    company: "AP Mobility India",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial: "His problem-solving mindset and enthusiasm made a noticeable impact on our project outcomes.",
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
    name: "AuraPulse - Mood-based Music Recommender",
    description:
      "CNN-based system that detects user mood with 71%+ accuracy and recommends personalized playlists.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    // image: aurapulseImage,  // add project image to assets
    image: carrent,
    source_code_link: "https://github.com/shivangrastogi/AuraPulse",
  },
  {
    name: "H2O Sync",
    description:
      "Android app using Google Maps API and Firebase to report water-related issues by sharing live location.",
    tags: [
      { name: "androidstudio", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "googlemapsapi", color: "pink-text-gradient" },
    ],
    // image: h2osyncImage,  // add image
    image: jobit,  // add image

    source_code_link: "https://github.com/shivangrastogi/H2OSync",
  },
  {
    name: "Educational Website",
    description:
      "B.Tech library website providing study materials and lecture access using HTML, CSS, and JavaScript.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    // image: eduWebsiteImage,  // add image
    image: tripguide,  // add image

    source_code_link: "https://github.com/shivangrastogi/EduLibrary",
  },
  {
    name: "Landslide Detection Model",
    description:
      "Arduino-based system that sends SMS alerts when unstable soil conditions are detected.",
    tags: [
      { name: "arduino", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "smsapi", color: "pink-text-gradient" },
    ],
    // image: landslideImage,  // add image
    image: tripguide,  // add image

    source_code_link: "https://github.com/shivangrastogi/LandslideDetector",
  },
];


export { services, technologies, experiences, testimonials, projects };
