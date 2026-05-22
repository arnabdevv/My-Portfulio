// import musicPlayerImg from "../assets/music_player.jpg";
import ModelImg from "../assets/3d_landing_page.png";
import studentManagementImg from "../assets/SMP.jpg";

export const projects = [
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
      "ZOD",
    ],
    liveUrl: "https://syncronus.vercel.app/",
    codeUrl: "https://github.com/arnabdevv/Chat-App-2.git",
    status: "live",
  },
  {
    title: "Student Management System",
    description:
      "A comprehensive student management system for tracking enrollment, grades, and academic progress with an intuitive admin interface.",
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
      "A full-stack machine learning-powered movie recommendation system that combines TF-IDF similarity matching with TMDB API integration to provide personalized movie suggestions.",
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
  {
    title: "3d Model Landing Page",
    description:
      "A visually stunning landing page showcasing interactive 3D models with smooth animations and engaging user interactions.",
    image: ModelImg,
    technologies: ["React", "D3.js", "GraphQL"],
    liveUrl: "https://3d-model-landing-page-by-arnab.vercel.app/",
    codeUrl: "https://github.com/arnabdevv/3d-Model-Landing-Page.git",
    status: "live",
  },

  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution featuring user authentication, payment integration, and an admin dashboard for managing products and orders.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://e-commerce-arnab.vercel.app/",
    codeUrl: "#",
    status: "live",
  },
  {
    title: "Crypto Portfolio Tracker",
    description:
      "A cryptocurrency portfolio tracker with real-time prices, detailed portfolio analysis, and market trend visualization.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Next.js", "CoinGecko API", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
    status: "upcoming",
  },
];

export const technologyColors = {
  React: { bg: "#61DAFB", text: "#FFFFFF" },
  "Node.js": {
    bg: "#68A063",
    text: "#FFFFFF",
  },
  MongoDB: { bg: "#13AA52", text: "#FFFFFF" },
  "Socket.io": {
    bg: "#010101",
    text: "#FFFFFF",
  },
  Express: { bg: "#000000", text: "#FFFFFF" },
  "Vue.js": { bg: "#4FC08D", text: "#FFFFFF" },
  "Chart.js": {
    bg: "#FF6384",
    text: "#FFFFFF",
  },
  API: { bg: "#0066FF", text: "#FFFFFF" },
  "D3.js": { bg: "#F9A825", text: "#FFFFFF" },
  GraphQL: { bg: "#E535AB", text: "#FFFFFF" },
  "React Native": {
    bg: "#61DAFB",
    text: "#FFFFFF",
  },
  "Next.js": { bg: "#000000", text: "#FFFFFF" },
  "CoinGecko API": {
    bg: "#F7931A",
    text: "#FFFFFF",
  },
  Tailwind: { bg: "#06B6D4", text: "#FFFFFF" },
  Redis: { bg: "#FF4757", text: "#FFFFFF" },
  JWT: { bg: "#0066FF", text: "#FFFFFF" },
  ZOD: { bg: "#6C5CE7", text: "#FFFFFF" },
  "HTTP-only Cookies": { bg: "#FF6348", text: "#FFFFFF" },
  "shadcn/ui": { bg: "#0F172A", text: "#FFFFFF" },
  FastAPI: { bg: "#00B300", text: "#FFFFFF" },
  Uvicorn: { bg: "#8E44AD", text: "#FFFFFF" },
  Streamlit: { bg: "#FF2E63", text: "#FFFFFF" },
  "Scikit-learn": { bg: "#003DA5", text: "#FFFFFF" },
  Pandas: { bg: "#130654", text: "#FFFFFF" },
  NumPy: { bg: "#4B8BBE", text: "#FFFFFF" },
  "Python-dotenv": { bg: "#3776AB", text: "#FFFFFF" },
  Zod: { bg: "#6C5CE7", text: "#FFFFFF" },
};
