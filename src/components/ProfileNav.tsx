import { BookOpen, Grid3X3, Package, Star, BookMarked } from "lucide-react";

interface ProfileNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  repoCount: number;
}

export const ProfileNav = ({ activeTab, onTabChange, repoCount }: ProfileNavProps) => {
  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "repositories", label: "Projects", icon: Grid3X3, count: repoCount },
    { id: "packages", label: "Experience", icon: Package },
    { id: "stars", label: "Skills", icon: Star },
  ];

  return (
    <nav className="border-b border-border bg-background sticky top-16 z-40">
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
              activeTab === tab.id
                ? "text-foreground border-primary"
                : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground/30"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
            {tab.count !== undefined && (
              <span className="counter-badge">{tab.count}</span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};
