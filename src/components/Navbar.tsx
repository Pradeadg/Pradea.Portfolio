import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
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
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Kenapa Saya', href: '#why-me' },
  ];

  return (
    <header 
      id="navbar"
      className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">
        
        {/* Floating Pill Bar */}
        <div className={`w-full bg-[#111111]/85 backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'ring-1 ring-white/15 bg-[#0D0D0D]/95' : ''
        }`}>
          
          {/* Logo Brand Left */}
          <a 
            href="#" 
            id="nav-logo"
            className="text-white text-base sm:text-lg font-black tracking-tight hover:text-[#FF3B30] transition-colors flex items-center gap-1.5 group"
          >
            <span>pradea®</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] group-hover:scale-125 transition-transform"></span>
          </a>

          {/* Menu Navigation Center (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#999990] hover:text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button Right */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={onOpenCv}
              id="nav-btn-cv"
              className="px-4 py-1.5 rounded-full bg-white text-[#0A0A0A] text-xs font-extrabold hover:bg-[#EAEAEA] transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 shadow-sm"
            >
              <span>Download CV</span>
              <Download className="w-3.5 h-3.5 text-[#FF3B30]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCv}
              className="px-3 py-1 rounded-full bg-white text-[#0A0A0A] text-[11px] font-bold flex items-center gap-1"
            >
              <span>CV</span>
              <Download className="w-3 h-3 text-[#FF3B30]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer Menu Popup */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto max-w-sm mx-auto mt-2 bg-[#141414]/95 backdrop-blur-2xl border border-white/15 p-4 rounded-3xl shadow-2xl space-y-2 md:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#D1D1D0] hover:text-white text-xs font-medium px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCv();
            }}
            className="w-full py-2.5 rounded-full bg-[#FF3B30] hover:bg-[#E0342A] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            <span>Download CV Lengkap</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
