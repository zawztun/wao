import React from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { cn } from '../utils';
import waoLogo from '../data/photos/wao_logo.jpg';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const activeSection = useActiveSection(['home', 'about', 'projects', 'contact']);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#16171d]/90 backdrop-blur-md border-b-2 border-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img 
              src={waoLogo} 
              alt="WAO Logo" 
              className="w-12 h-12 object-contain rounded-full border-2 border-brand-highlight shadow-sm"
            />
            <span className="text-2xl font-black text-brand-primary tracking-tighter">World Arakanese Organization</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                    activeSection === item.href.slice(1)
                      ? "text-brand-primary"
                      : "text-gray-600 dark:text-gray-400 hover:text-brand-primary"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button could be added here */}
          </div>
        </div>
      </div>
    </nav>
  );
};
