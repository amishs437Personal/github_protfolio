import { Star, GitFork, Circle, ExternalLink } from "lucide-react";

interface RepositoryCardProps {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  image?: string;
  url?: string;
  topics?: string[];
  isPinned?: boolean;
}

export const RepositoryCard = ({
  name,
  description,
  language,
  languageColor,
  stars,
  forks,
  image,
  url,
  topics = [],
  isPinned = false,
}: RepositoryCardProps) => {
  return (
    <article className="repo-card group animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
      {image && (
        <div className="mb-3 -mx-4 -mt-4 overflow-hidden rounded-t-md">
          <img
            src={image}
            alt={name}
            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold truncate">
              <a href={url || "#"} className="github-link hover:underline">
                {name}
              </a>
            </h3>
            {isPinned && (
              <span className="status-badge bg-secondary text-muted-foreground">
                Public
              </span>
            )}
          </div>
          
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>

          {topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {topics.slice(0, 4).map((topic) => (
                <span key={topic} className="tag-badge text-xs">
                  {topic}
                </span>
              ))}
            </div>
          )}

          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Circle className="w-3 h-3" style={{ fill: languageColor, color: languageColor }} />
              <span>{language}</span>
            </div>
            <a href="#" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Star className="w-3.5 h-3.5" />
              <span>{stars.toLocaleString()}</span>
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-accent transition-colors">
              <GitFork className="w-3.5 h-3.5" />
              <span>{forks.toLocaleString()}</span>
            </a>
          </div>
        </div>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-accent transition-colors opacity-0 group-hover:opacity-100"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
};
