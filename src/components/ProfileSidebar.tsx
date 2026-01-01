import { MapPin, Link as LinkIcon, Mail, Building, Users, Star, Calendar } from "lucide-react";

interface ProfileSidebarProps {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  location: string;
  website: string;
  email: string;
  company: string;
  followers: number;
  following: number;
  stars: number;
}

export const ProfileSidebar = ({
  name,
  username,
  avatar,
  bio,
  location,
  website,
  email,
  company,
  followers,
  following,
  stars,
}: ProfileSidebarProps) => {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-20">
        {/* Avatar and name */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative group">
            <img
              src={avatar}
              alt={name}
              className="w-64 h-64 lg:w-72 lg:h-72 rounded-full border-4 border-card shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-primary rounded-full border-4 border-card animate-pulse-green" />
          </div>
          
          <div className="mt-4 text-center lg:text-left">
            <h1 className="text-2xl font-semibold text-foreground">{name}</h1>
            <p className="text-xl text-muted-foreground font-light">{username}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-foreground/90 leading-relaxed">{bio}</p>

        {/* Edit profile button */}
        <button className="github-btn w-full mt-4 justify-center">
          View Resume
        </button>

        {/* Stats */}
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <a href="#followers" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Users className="w-4 h-4" />
            <span className="font-semibold text-foreground">{followers}</span>
            <span>followers</span>
          </a>
          <span>·</span>
          <a href="#following" className="flex items-center gap-1 hover:text-accent transition-colors">
            <span className="font-semibold text-foreground">{following}</span>
            <span>following</span>
          </a>
          <span>·</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span className="font-semibold text-foreground">{stars}</span>
          </div>
        </div>

        {/* Details */}
        <ul className="mt-6 space-y-2 text-sm">
          {company && (
            <li className="flex items-center gap-2 text-foreground">
              <Building className="w-4 h-4 text-muted-foreground" />
              {company}
            </li>
          )}
          {location && (
            <li className="flex items-center gap-2 text-foreground">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              {location}
            </li>
          )}
          {email && (
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <a href={`mailto:${email}`} className="github-link">{email}</a>
            </li>
          )}
          {website && (
            <li className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-muted-foreground" />
              <a href={website} target="_blank" rel="noopener noreferrer" className="github-link">
                {website.replace(/^https?:\/\//, '')}
              </a>
            </li>
          )}
          <li className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            Member since 2020
          </li>
        </ul>

        {/* Skills/Languages */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Java", "Spring Boot", "Next.js", "Tailwind CSS", 
    "Node.js", "Python", "JavaScript", "AWS", "Docker", "Kubernetes", 
    "Jenkins", "Git", "JIRA", "Postman", "REST API", "GraphQL", 
    "PostgreSQL", "Oracle", "JUnit", "Maven", "Kafka", 
    "Payment Gateways", "GST API", "GenAI"].map((skill) => (
              <span key={skill} className="tag-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Achievements</h3>
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full bg-github-yellow/20 flex items-center justify-center" title="Star Contributor">
              <Star className="w-6 h-6 text-github-yellow" />
            </div>
            <div className="w-12 h-12 rounded-full bg-github-purple/20 flex items-center justify-center" title="Arctic Code Vault">
              <span className="text-xl">❄️</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-github-green/20 flex items-center justify-center" title="PRO">
              <span className="text-sm font-bold text-primary">PRO</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
