import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import { Language, useLanguage } from '../LanguageContext';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const { language, setLanguage, copy } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: copy.nav.work, href: '#work' },
    { name: copy.nav.skills, href: '#skills' },
    { name: copy.nav.process, href: '#process' },
    { name: copy.nav.about, href: '#about' },
    { name: copy.nav.why, href: '#why-me' },
  ];

  const LanguageToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center rounded-pill border border-line-dark bg-white/5 p-0.5 ${mobile ? 'w-full' : ''}`} role="group" aria-label={copy.language}>
      {(['en', 'id'] as Language[]).map((option) => (
        <button key={option} type="button" onClick={() => setLanguage(option)} aria-pressed={language === option}
          className={`${mobile ? 'flex-1 py-2' : 'px-2 py-1'} rounded-pill text-[10px] font-bold uppercase tracking-wide transition-all duration-200 ${language === option ? 'bg-white text-black shadow-sm' : 'text-muted-soft hover:bg-white/10 hover:text-white'}`}>
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <header 
      id="navbar"
      className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">
        
        {/* Floating Pill Bar */}
        <div className={`w-full bg-black/85 backdrop-blur-xl border border-line-dark px-4 sm:px-6 py-2.5 sm:py-3 rounded-pill shadow-photo flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'ring-1 ring-white/15 bg-black/95' : ''
        }`}>
          
          {/* Logo Brand Left */}
          <a 
            href="#" 
            id="nav-logo"
            className="text-white text-base sm:text-lg font-black tracking-tight hover:text-accent transition-colors flex items-center gap-1.5 group"
          >
            <span>pradea®</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform"></span>
          </a>

          {/* Menu Navigation Center (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-muted-soft hover:text-white text-xs font-medium px-3.5 py-1.5 rounded-pill transition-colors hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button Right */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={onOpenCv}
              id="nav-btn-cv"
              className="hero-button-motion px-4 py-1.5 rounded-pill bg-white text-black text-xs font-extrabold hover:bg-gray-bg flex items-center gap-1.5 shadow-cta"
            >
              <span>{copy.nav.cv}</span>
              <Download className="w-3.5 h-3.5 text-accent" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCv}
              className="hero-button-motion px-3 py-1 rounded-pill bg-white text-black text-[11px] font-bold flex items-center gap-1"
            >
              <span>CV</span>
              <Download className="w-3 h-3 text-accent" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="hero-button-motion p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label={mobileMenuOpen ? copy.nav.close : copy.nav.open}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer Menu Popup */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto max-w-sm mx-auto mt-2 bg-black/95 backdrop-blur-2xl border border-line-dark p-4 rounded-card-lg shadow-photo space-y-2 md:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-muted-soft hover:text-white text-xs font-medium px-4 py-2.5 rounded-card hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="border-t border-line-dark pt-3">
            <span className="mb-2 block px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-soft">{copy.language}</span>
            <LanguageToggle mobile />
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCv();
            }}
            className="hero-button-motion w-full py-2.5 rounded-pill bg-accent hover:bg-accent-hover text-white text-xs font-bold flex items-center justify-center gap-2 shadow-cta"
          >
            <span>{copy.nav.fullCv}</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
