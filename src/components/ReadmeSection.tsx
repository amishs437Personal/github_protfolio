import { FileText, Pencil } from "lucide-react";

export const ReadmeSection = () => {
  return (
    <section className="mt-6 animate-fade-up opacity-0 stagger-3" style={{ animationFillMode: 'forwards' }} id="about">
      <div className="border border-border rounded-md bg-card overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
          <div className="flex items-center gap-2 text-sm">
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="font-semibold text-foreground">README</span>
            <span className="text-muted-foreground">.md</span>
          </div>
          <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Pencil className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 prose prose-invert max-w-none">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            Hi there, I'm Amish Sharma 👋
          </h1>
          
          <h2 className="text-lg font-semibold text-foreground mt-6 border-b border-border pb-2">
            🚀 About Me
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            I'm a <span className="text-primary font-medium">Full Stack Developer</span> passionate about building 
            beautiful, performant web applications. With 4+ years of experience in the industry, I specialize 
            in React, TypeScript, and cloud technologies.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6 border-b border-border pb-2">
            🔭 What I'm Working On
          </h2>
          <ul className="text-foreground/80 space-y-2 list-disc list-inside">
            <li>Building scalable SaaS applications</li>
            <li>Contributing to open-source projects</li>
            <li>Exploring AI/ML integrations in web apps</li>
            <li>Writing technical articles and tutorials</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mt-6 border-b border-border pb-2">
            🛠️ Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
            { name: "React", color: "bg-github-blue/20 text-github-blue" },
    { name: "TypeScript", color: "bg-github-blue/20 text-github-blue" },
    { name: "Java", color: "bg-red-100 text-red-800" },
    { name: "Spring Boot", color: "bg-green-100 text-green-800" },
    { name: "Node.js", color: "bg-primary/20 text-primary" },
    { name: "Python", color: "bg-github-yellow/20 text-github-yellow" },
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
    { name: "Next.js", color: "bg-black/20 text-black" },
    { name: "PostgreSQL", color: "bg-github-blue/20 text-github-blue" },
    { name: "RDBMS", color: "bg-blue-100 text-blue-800" },
    { name: "Oracle", color: "bg-red-100 text-red-800" },
    { name: "AWS", color: "bg-github-orange/20 text-github-orange" },
    { name: "Docker", color: "bg-github-blue/20 text-github-blue" },
    { name: "Kubernetes", color: "bg-github-blue/20 text-github-blue" },
    { name: "Jenkins", color: "bg-red-100 text-red-800" },
    { name: "Git", color: "bg-github-black/20 text-github-black" },
    { name: "JIRA", color: "bg-blue-100 text-blue-800" },
    { name: "Postman", color: "bg-orange-100 text-orange-800" },
    { name: "REST API", color: "bg-indigo-100 text-indigo-800" },
    { name: "GraphQL", color: "bg-github-pink/20 text-github-pink" },
    { name: "JPA", color: "bg-green-100 text-green-800" },
    { name: "JUnit", color: "bg-red-100 text-red-800" },
    { name: "Maven", color: "bg-orange-100 text-orange-800" },
    { name: "Kafka", color: "bg-purple-100 text-purple-800" },
    { name: "Active Directory", color: "bg-gray-100 text-gray-800" },
    { name: "Agile", color: "bg-green-100 text-green-800" },
    { name: "Automated Testing", color: "bg-blue-100 text-blue-800" },
    { name: "Payment Gateways", color: "bg-green-100 text-green-800" },
    { name: "GST API", color: "bg-orange-100 text-orange-800" },
    { name: "GenAI", color: "bg-purple-100 text-purple-800" },
            ].map((tech) => (
              <span key={tech.name} className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}>
                {tech.name}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-foreground mt-6 border-b border-border pb-2">
            📊 GitHub Stats
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {[
              { label: "Repositories", value: "42", color: "text-primary" },
              { label: "Contributions", value: "1.2K", color: "text-github-blue" },
              { label: "Stars Earned", value: "856", color: "text-github-yellow" },
              { label: "Followers", value: "234", color: "text-github-purple" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary/50">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-foreground mt-6 border-b border-border pb-2">
            📫 Let's Connect
          </h2>
          <p className="text-foreground/80">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part 
            of your visions. Feel free to reach out!
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#contact" className="github-btn-primary">
              Get In Touch
            </a>
            <a href="#" className="github-btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
