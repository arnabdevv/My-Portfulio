// import musicPlayerImg from "../assets/music_player.jpg";
import studentManagementImg from "../assets/SMP.jpg";
import aelyraImg from "../assets/aelyra.png";
import connectimiImg from "../assets/connectimi.png";

export const projects = [
  {
    title: "Aelyra Geo-Tag Management System",
    description:
      "A production-ready geo-tag management platform for renewable energy projects featuring multi-tenant architecture, RBAC, geo-tagged reports, dynamic asset types, and a responsive admin dashboard.",
    image: aelyraImg,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "REST APIs",
      "Multer",
      "Zod",
    ],
    liveUrl: "https://geovisit.brickway.in",
    codeUrl: "#",
    status: "live",
  },

  {
    title: "Connectimi – Professional Networking Platform",
    description:
      "A scalable backend powering a professional networking platform with authentication, job recruitment, messaging, consultancy services, course management, and production deployment.",
    image: connectimiImg,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT",
      "Cloudinary",
      "Zod",
    ],
    liveUrl: "https://connectimi.in",
    codeUrl: "#",
    status: "live",
  },

  {
    title: "Syncronus — Real-time Chat Application",
    description:
      "A modern real-time chat application built with React, Node.js, Socket.io, MongoDB, and Redis.",
    image: "https://codimite.ai/wp-content/uploads/Blog-cover-69.png",
    technologies: [
      "React",
      "Socket.io",
      "Express",
      "Node.js",
      "MongoDB",
      "Redis",
      "JWT",
      "Zod",
    ],
    liveUrl: "https://syncronus.vercel.app/",
    codeUrl: "https://github.com/arnabdevv/Chat-App-2.git",
    status: "live",
  },

  {
    title: "Student Management Platform",
    description:
      "A full-stack student management platform featuring JWT authentication, RBAC, protected dashboards, class & batch management, and academic administration.",
    image: studentManagementImg,
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "JWT",
      "HTTP-only Cookies",
      "shadcn/ui",
      "Zod",
    ],
    liveUrl: "https://smp-arnab.vercel.app/",
    codeUrl: "https://github.com/arnabdevv/SMP.git",
    status: "live",
  },

  {
    title: "Movie Recommender System",
    description:
      "A machine learning-powered movie recommendation system using TF-IDF similarity matching with TMDB API integration for personalized recommendations.",
    image:
      "https://editor.analyticsvidhya.com/uploads/76889recommender-system-for-movie-recommendation.jpg",
    technologies: [
      "FastAPI",
      "Uvicorn",
      "Streamlit",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Python-dotenv",
    ],
    liveUrl: "#",
    codeUrl: "https://github.com/arnabdevv/movie-recomendation-system.git",
    status: "live",
  },
];

export const technologyColors = {
  React: {
    bg: "#61DAFB",
    text: "#FFFFFF",
  },

  "Node.js": {
    bg: "#68A063",
    text: "#FFFFFF",
  },

  MongoDB: {
    bg: "#13AA52",
    text: "#FFFFFF",
  },

  MySQL: {
    bg: "#4479A1",
    text: "#FFFFFF",
  },

  Redis: {
    bg: "#DC382D",
    text: "#FFFFFF",
  },

  "Socket.io": {
    bg: "#010101",
    text: "#FFFFFF",
  },

  Express: {
    bg: "#000000",
    text: "#FFFFFF",
  },

  "Express.js": {
    bg: "#000000",
    text: "#FFFFFF",
  },

  JWT: {
    bg: "#0066FF",
    text: "#FFFFFF",
  },

  "REST APIs": {
    bg: "#0EA5E9",
    text: "#FFFFFF",
  },

  Multer: {
    bg: "#F59E0B",
    text: "#FFFFFF",
  },

  Cloudinary: {
    bg: "#3448C5",
    text: "#FFFFFF",
  },

  "HTTP-only Cookies": {
    bg: "#FF6348",
    text: "#FFFFFF",
  },

  "shadcn/ui": {
    bg: "#0F172A",
    text: "#FFFFFF",
  },

  Zod: {
    bg: "#6C5CE7",
    text: "#FFFFFF",
  },

  FastAPI: {
    bg: "#009688",
    text: "#FFFFFF",
  },

  Uvicorn: {
    bg: "#8E44AD",
    text: "#FFFFFF",
  },

  Streamlit: {
    bg: "#FF2E63",
    text: "#FFFFFF",
  },

  "Scikit-learn": {
    bg: "#F7931E",
    text: "#FFFFFF",
  },

  Pandas: {
    bg: "#130654",
    text: "#FFFFFF",
  },

  NumPy: {
    bg: "#4B8BBE",
    text: "#FFFFFF",
  },

  "Python-dotenv": {
    bg: "#3776AB",
    text: "#FFFFFF",
  },

  "Next.js": {
    bg: "#000000",
    text: "#FFFFFF",
  },

  Tailwind: {
    bg: "#06B6D4",
    text: "#FFFFFF",
  },

  API: {
    bg: "#0066FF",
    text: "#FFFFFF",
  },

  "React Native": {
    bg: "#61DAFB",
    text: "#FFFFFF",
  },

  "Vue.js": {
    bg: "#4FC08D",
    text: "#FFFFFF",
  },

  "Chart.js": {
    bg: "#FF6384",
    text: "#FFFFFF",
  },

  "D3.js": {
    bg: "#F9A825",
    text: "#FFFFFF",
  },

  GraphQL: {
    bg: "#E535AB",
    text: "#FFFFFF",
  },

  "CoinGecko API": {
    bg: "#F7931A",
    text: "#FFFFFF",
  },
};
