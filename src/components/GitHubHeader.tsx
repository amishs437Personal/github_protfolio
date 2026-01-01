import { Github, Bell, Plus, ChevronDown, Search, Menu } from "lucide-react";
import { useState } from "react";

export const GitHubHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-header-bg border-b border-header-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-foreground hover:text-foreground/80"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <a href="/" className="text-foreground hover:text-foreground/80 transition-colors">
              <Github className="w-8 h-8" />
            </a>

            {/* Search bar - hidden on mobile */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Type / to search"
                  className="w-64 lg:w-80 pl-9 pr-4 py-1.5 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder:text-muted-foreground"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-xs border border-border rounded text-muted-foreground">
                  /
                </span>
              </div>
            </div>

            {/* Navigation links - hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-1">
              <a href="#projects" className="nav-item">Projects</a>
              <a href="#about" className="nav-item">About</a>
              <a href="#contact" className="nav-item">Contact</a>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-foreground hover:text-foreground/80 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </button>

            <div className="hidden sm:flex items-center gap-1">
              <button className="p-2 text-foreground hover:text-foreground/80">
                <Plus className="w-5 h-5" />
              </button>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </div>

            <button className="flex items-center gap-1">
              <img
                src="https://avatars.githubusercontent.com/u/583231?v=4"
                alt="Profile"
                className="w-8 h-8 rounded-full ring-2 ring-transparent hover:ring-accent/50 transition-all"
              />
              <ChevronDown className="hidden sm:block w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <a href="#projects" className="nav-item">Projects</a>
              <a href="#about" className="nav-item">About</a>
              <a href="#contact" className="nav-item">Contact</a>
            </div>
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
