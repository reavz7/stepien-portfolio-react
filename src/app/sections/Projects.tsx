import drzwikoziol from "@/assets/images/drzwikoziol_img.png";

const portfolioProjects = [
  {
    company: "Bachelor's Web App",
    year: "2025",
    title: "EatCheap",
    results: [
      { title: "Fullstack app: Node.js (Express) + React (Vite)" },
      { title: "Smart recipe suggestion algorithm based on ingredients" },
      { title: "Helps students plan meals and save money" },
    ],
    link: "https://github.com/reavz7/EatCheap",
    image: drzwikoziol, // tymczasowo
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
  },
  {
    company: "Knowit",
    year: "2025",
    title: "Defake",
    results: [
      { title: "Designed complete UI/UX from scratch" },
      { title: "Integrated frontend with AI-powered backend" },
      { title: "Worked in a team on a large-scale project" },
    ],
    link: "https://www.knowit.pl",
    image: drzwikoziol, // tymczasowo
  },
];

export const ProjectsSection = () => {
  return <div>Projects Section</div>;
};
