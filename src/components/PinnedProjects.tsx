import { RepositoryCard } from "./RepositoryCard";

const pinnedProjects = [
  {
    name: "e-commerce-platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include cart management, payment integration with Stripe, product catalog, user authentication, and admin dashboard for order management.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 342,
    forks: 89,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
    url: "#",
    topics: ["react", "node.js", "postgresql", "stripe"],
  },
  {
    name: "Inventory Management",
    description: "A comprehensive inventory management system built with Python, FastAPI, and Redis. Features include CRUD operations for stock tracking, real-time inventory updates, low-stock alerts, and supplier management.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 567,
    forks: 123,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    url: "#",
    topics: ["python", "openai", "fastapi", "redis"],
  },
  {
    name: "Gst AND Ledger Management System ",
    description: "A GST-compliant billing and ledger management system built with React and TypeScript using Supabase. Features include invoice generation, GST calculations, ledger tracking, party management, and financial reporting.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 234,
    forks: 56,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    url: "#",
    topics: ["react", "dnd-kit", "supabase"],
  },
  {
    name: "Legal Website for Lawyers",
    description: "A professional multi-page website for law firms and attorneys built with React. Features include service listings, case studies, attorney profiles, contact forms, practice areas, and responsive design for client inquiries.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 189,
    forks: 45,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
    url: "#",
    topics: ["react", "chart.js", "weather-api"],
  },
  {
    name: "Jewellery Website",
    description: "A CLI tool that generates beautiful portfolio websites from your GitHub profile and repositories automatically using Go and GitHub API.",
    language: "Go",
    languageColor: "#00ADD8",
    stars: 421,
    forks: 78,
    url: "#",
    topics: ["go", "cli", "github-api"],
  },
  {
    name: "Cancer-Specialist Website ",
    description: "A modern healthcare website for cancer specialists built with React and TypeScript. Features patient information pages, treatment services, doctor profiles, appointment booking forms, and responsive medical layouts.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 156,
    forks: 34,
    url: "#",
    topics: ["react", "markdown", "codemirror"],
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
