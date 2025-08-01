import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useSmoothScroll, useActiveSection } from "@/hooks/use-smooth-scroll";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState<string>('');
  const { scrollToElement, isScrolling } = useSmoothScroll();
  
  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const activeSection = useActiveSection(['home', 'about', 'projects', 'contact']);

  const handleNavClick = (e: React.MouseEvent, itemId: string) => {
    e.preventDefault();
    setClickedItem(itemId);
    setIsMenuOpen(false);
    
    // Reset click animation after delay
    setTimeout(() => setClickedItem(''), 300);
    
    // Smooth scroll to section
    scrollToElement(itemId, 1200, -80);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-coral">Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`
                    text-foreground hover:text-coral transition-all duration-300 font-medium relative group hover:scale-105
                    ${activeSection === item.id ? 'text-coral' : ''}
                    ${clickedItem === item.id ? 'animate-pulse scale-110' : ''}
                  `}
                >
                  {item.name}
                  <span 
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-coral transition-all duration-300
                      ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  ></span>
                  {clickedItem === item.id && (
                    <span className="absolute inset-0 rounded-md bg-coral/20 animate-ping"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`
                  block w-full text-left px-3 py-2 text-foreground hover:text-coral hover:bg-pink-light/50 
                  transition-all duration-300 font-medium rounded-md relative overflow-hidden
                  ${activeSection === item.id ? 'text-coral bg-coral/10' : ''}
                  ${clickedItem === item.id ? 'animate-pulse bg-coral/20' : ''}
                `}
              >
                {item.name}
                {clickedItem === item.id && (
                  <span className="absolute inset-0 bg-coral/20 animate-ping rounded-md"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;