import { useState } from "react";
import { GitHubHeader } from "@/components/GitHubHeader";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { ProfileNav } from "@/components/ProfileNav";
import { PinnedProjects } from "@/components/PinnedProjects";
import { ContributionGraph } from "@/components/ContributionGraph";
import { ReadmeSection } from "@/components/ReadmeSection";
import { ContactSection } from "@/components/ContactSection";

const profileData = {
  name: "Amish Sharma",
  username: "amish_sharma",
  avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
  bio: "Full Stack Developer | Building beautiful web experiences |React/TypeScript & Spring Boot| Open source enthusiast | Coffee addict ☕",
  location: "Lucknow,India",
  website: "https://foxfusionsolution.site",
  email: "amishs437@gmail.com",
  company: "Fox Fusion Solution",
  followers: 234,
  following: 89,
  stars: 856,
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <GitHubHeader />
      
      <ProfileNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        repoCount={42}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <ProfileSidebar {...profileData} />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {activeTab === "overview" && (
              <>
                <PinnedProjects />
                <ContributionGraph />
                <ReadmeSection />
                <ContactSection />
              </>
            )}

            {activeTab === "repositories" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">Projects</h2>
                  <button className="github-btn-primary">
                    New Project
                  </button>
                </div>
                <PinnedProjects />
              </div>
            )}

            {activeTab === "packages" && (
              <div className="border border-border rounded-md bg-card p-8 text-center">
                <h2 className="text-xl font-semibold text-foreground mb-4">Work Experience</h2>
                <div className="space-y-6 text-left max-w-2xl mx-auto">
                  {[
                    {
                      role: "Senior Full Stack Developer",
                      company: "TechStartup Inc.",
                      period: "2022 - Present",
                      description: "Leading development of core platform features, mentoring junior developers, and architecting scalable solutions.",
                    },
                    {
                      role: "Full Stack Developer",
                      company: "Digital Agency Co.",
                      period: "2020 - 2022",
                      description: "Built and maintained multiple client projects using React, Node.js, and cloud services.",
                    },
                    {
                      role: "Frontend Developer",
                      company: "StartupXYZ",
                      period: "2019 - 2020",
                      description: "Developed responsive web applications and improved site performance by 40%.",
                    },
                  ].map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-accent text-sm">{exp.company}</p>
                      <p className="text-muted-foreground text-xs mb-2">{exp.period}</p>
                      <p className="text-foreground/80 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "stars" && (
              <div className="border border-border rounded-md bg-card p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Skills & Technologies</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "Bootstrap"] }, // Added from resume [file:18]
  { category: "Backend", skills: ["Java", "Spring Boot", "Java EE", "Node.js", "Python", "JPA", "JMS", "Spring Batch", "REST APIs", "Oracle RDBMS", "PLSQL", "RDBMS"] }, // Added Java stack [file:3][file:18]
  { category: "DevOps", skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Maven", "Git", "CI/CD"] }, // Added enterprise DevOps [file:18]
  { category: "Tools", skills: ["Git", "VS Code", "IntelliJ", "Eclipse", "Postman", "Jira", "Confluence", "Grafana"] }, // Added IDEs/tools [file:3]
  { category: "Testing", skills: ["JUnit", "Mockito", "Automated Testing", "Apache JMeter", "Jest"] }, // Added Java testing [file:18]
  { category: "Other", skills: ["GraphQL", "REST APIs", "Kafka", "Active Directory", "Agile", "GenAI", "Payment Gateways", "GST API", "Apache Tomcat"] },
                  ].map((group) => (
                    <div key={group.category} className="p-4 bg-secondary/50 rounded-md">
                      <h3 className="font-semibold text-foreground mb-3">{group.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span key={skill} className="tag-badge">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 Amish Sharma. Built with ❤️ and lots of ☕</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
