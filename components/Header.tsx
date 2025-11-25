
import React, { useState, useEffect } from 'react';

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: 'https://forms.gle/nehQhV7gvUUSaLCy5', external: true },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const internalLinks = NAV_LINKS.filter(link => !link.external);
      const sections = internalLinks.map(link => document.querySelector(link.href) as HTMLElement | null);
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.clientHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-slate-950/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center space-x-2 text-2xl font-bold">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="text-slate-100">AI Nest <span className="text-emerald-400">Solutions</span></span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`text-sm font-medium transition-colors duration-300 ${!link.external && activeSection === link.href.substring(1) ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-300'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <a href="https://forms.gle/nehQhV7gvUUSaLCy5" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors duration-300 shadow-md shadow-emerald-500/20">
              Get a Quote
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-4 p-2 rounded-md text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${!link.external && activeSection === link.href.substring(1) ? 'bg-emerald-500 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
             <a href="https://forms.gle/nehQhV7gvUUSaLCy5" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="block w-full text-center mt-4 bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors duration-300 shadow-md shadow-emerald-500/20">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
