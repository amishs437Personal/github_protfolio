import { RepositoryCard } from "./RepositoryCard";

const pinnedProjects = [
   {
    name: "Fox Fusion Solution",
    description: "A digital platform connecting people to leverage software, digital marketing, and website development for rapid brand growth.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 156,
    forks: 34,
    image: "public/image2.png",
    url: "https://foxfusionsolution.site/",
    topics: ["react", "markdown", "codemirror"],
  },
   {
    name: "Cancer Specailist from Italy",
    description: "A modern healthcare website for cancer specialists built with React and TypeScript. Features patient information pages, treatment services, doctor profiles, appointment booking forms, and responsive medical layouts.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 156,
    forks: 34,
    image: "public/image.png",
    url: "https://precisiononcocare.com/",
    topics: ["react", "markdown", "codemirror"],
  },
  {
    name: "e-commerce-platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include cart management, payment integration with Stripe, product catalog, user authentication, and admin dashboard for order management.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 342,
    forks: 89,
    image: "public/Screenshot 2026-01-01 214829.png",
    url: "https://foxecommerce.vercel.app/",
    topics: ["react", "node.js", "postgresql", "stripe"],
  },
  {
    name: "Legal Website for Lawyers",
    description: "A professional multi-page website for law firms and attorneys built with React. Features include service listings, case studies, attorney profiles, contact forms, practice areas, and responsive design for client inquiries.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 189,
    forks: 45,
    image: "public/Screenshot 2026-01-01 215006.png",
    url: "https://foxlawyers.vercel.app/",
    topics: ["react", "chart.js", "weather-api"],
  },
  {
    name: "Jewellery Website",
    description: "A CLI tool that generates beautiful portfolio websites from your GitHub profile and repositories automatically using Go and GitHub API.",
    language: "Go",
    languageColor: "#00ADD8",
    stars: 421,
    forks: 78,
    image: "public/Screenshot 2026-01-01 215026.png",
    url: "https://foxjewels.vercel.app/",
    topics: ["go", "cli", "github-api"],
  },
  {
    name: "Construction Website",
    description: "A digital platform connecting clients to construction professionals via a Tinder-like swipe feature, where users browse and select contractors based on their portfolios, past works, and project showcases for accelerated brand and project development.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 156,
    forks: 34,
    image: "public/Screenshot 2026-01-01 214912.png",
    url: "https://foxconstruction.vercel.app/",
    topics: ["react", "markdown", "codemirror"],
  },
  {
    name: "Inventory Management",
    description: "A comprehensive inventory management system built with Python, FastAPI, and Redis. Features include CRUD operations for stock tracking, real-time inventory updates, low-stock alerts, and supplier management.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 567,
    forks: 123,
    image: "public/Screenshot 2026-01-01 215100.png",
    url: "https://foxinventory.vercel.app/",
    topics: ["python", "openai", "fastapi", "redis"],
  },
  {
    name: "Gst AND Ledger Management System ",
    description: "A GST-compliant billing and ledger management system built with React and TypeScript using Supabase. Features include invoice generation, GST calculations, ledger tracking, party management, and financial reporting.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 234,
    forks: 56,
    image: "public/Screenshot 2026-01-01 215043.png",
    url: "https://foxgstledger.vercel.app/",
    topics: ["react", "dnd-kit", "supabase"],
  },
];

export const PinnedProjects = () => {
  return (
    <section className="mt-6" id="projects">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-medium text-foreground">
          Pinned
        </h2>
        <a href="#repositories" className="text-xs text-muted-foreground hover:text-accent transition-colors">
          Customize your pins
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {pinnedProjects.map((project, index) => (
          <div key={project.name} className={`stagger-${index + 1}`}>
            <RepositoryCard {...project} isPinned />
          </div>
        ))}
      </div>
    </section>
  );
};
