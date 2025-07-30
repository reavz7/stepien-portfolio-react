import drzwikoziol from "../assets/images/drzwikoziol_img.png";
import footballplanner from "../assets/images/football_planner.png";
import letheai from "../assets/images/letheai.jpg";
const portfolioProjects = [
  {
    company: "Knowit",
    year: "2025",
    title: "LETHE.AI",
    results: [
      { title: "Designed complete UI/UX from scratch" },
      { title: "Integrated frontend with AI-powered backend" },
      { title: "Worked in a team on a large-scale project" },
    ],  
    link: "https://www.knowit.pl",
    image: letheai,
  },
  {
    company: "Study project",
    year: "2024",
    title: "Football Planner",
    results: [
      { title: "Fullstack app: Node.js (Express) + React (Vite)" },
      { title: "Match organizer webapp" },
      { title: "Helps people to meet and play football⚽" },
    ],
    link: "https://github.com/reavz7/FootballPlanner",
    image: footballplanner, 
  },
  {
    company: "Drzwi Koziol",  
    year: "2024",
    title: "drzwikoziol.pl",
    results: [
      { title: "Commercial project for a real client" },
      { title: "Designed and built a clean, functional business site" },
      { title: "Understood client needs and delivered fast" },
    ],
    link: "https://github.com/reavz7/DrzwiKoziol",
    image: drzwikoziol,
  } 
];

export const ProjectsSection = () => {
  return <div>ProjectSection</div>
};
