export const projects = [
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
    title: "Music Player App",
    description:
      "A collaborative music player application with real-time updates, drag-and-drop playlist management, and team collaboration features.",
    image: "src/assets/music_player.jpg",
    technologies: ["React", "Socket.io", "Express"],
    liveUrl: "https://music-player-gold-three.vercel.app/",
    codeUrl: "#",
    status: "live",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard with location search, 7-day forecasts, and visual data charts powered by OpenWeather API.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Vue.js", "Chart.js", "API"],
    liveUrl: "https://weather-app-by-arnabdev.vercel.app/",
    codeUrl: "#",
    status: "live",
  },
  {
    title: "3d Model Landing Page",
    description:
      "A visually stunning landing page showcasing interactive 3D models with smooth animations and engaging user interactions.",
    image: "src/assets/3d_landing_page.png",
    technologies: ["React", "D3.js", "GraphQL"],
    liveUrl: "https://3d-model-landing-page-by-arnab.vercel.app/",
    codeUrl: "#",
    status: "live",
  },
  {
    title: "Student Management System",
    description:
      "A comprehensive student management system for tracking enrollment, grades, and academic progress with an intuitive admin interface.",
    image: "src/assets/SMP.jpg",
    technologies: ["React Native", "Redux", "Firebase"],
    liveUrl: "#",
    codeUrl: "#",
    status: "on going",
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
  React: { bg: "var(--primary-magenta)", text: "var(--primary-magenta)" },
  "Node.js": {
    bg: "var(--primary-blue)",
    text: "var(--primary-blue)",
  },
  MongoDB: { bg: "var(--primary-cyan)", text: "var(--primary-cyan)" },
  "Socket.io": {
    bg: "var(--primary-purple)",
    text: "var(--primary-purple)",
  },
  Express: { bg: "var(--primary-magenta)", text: "var(--primary-magenta)" },
  "Vue.js": { bg: "var(--primary-blue)", text: "var(--primary-blue)" },
  "Chart.js": {
    bg: "var(--primary-cyan)",
    text: "var(--primary-cyan)",
  },
  API: { bg: "var(--primary-purple)", text: "var(--primary-purple)" },
  "D3.js": { bg: "var(--primary-cyan)", text: "var(--primary-cyan)" },
  GraphQL: { bg: "var(--primary-magenta)", text: "var(--primary-magenta)" },
  "React Native": {
    bg: "var(--primary-blue)",
    text: "var(--primary-blue)",
  },
  Redux: { bg: "var(--primary-purple)", text: "var(--primary-purple)" },
  Firebase: {
    bg: "var(--primary-magenta)",
    text: "var(--primary-magenta)",
  },
  "Next.js": { bg: "var(--primary-blue)", text: "var(--primary-blue)" },
  "CoinGecko API": {
    bg: "var(--primary-cyan)",
    text: "var(--primary-light-green)",
  },
  Tailwind: { bg: "var(--primary-purple)", text: "var(--primary-purple)" },
};
