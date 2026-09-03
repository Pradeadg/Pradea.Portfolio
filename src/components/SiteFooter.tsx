import React from 'react';
import { ArrowRight, ArrowUp, ArrowUpRight, Download, Mail } from 'lucide-react';
import { AnimatedPillContent } from './AnimatedPillContent';
import { useLanguage } from '../LanguageContext';

interface SiteFooterProps {
  onOpenCv: () => void;
}

const socialLinks = [
  ['LinkedIn', 'https://www.linkedin.com/in/pradea-dg-13456425a/'],
  ['Behance', 'https://www.behance.net/kaibahidek0fd2'],
  ['Email', 'mailto:pradea.dg@gmail.com'],
  ['WhatsApp', 'https://wa.me/6285819699796'],
];

export const SiteFooter: React.FC<SiteFooterProps> = ({ onOpenCv }) => {
  const { copy } = useLanguage();
  const menuLinks = [[copy.footer.home, '#hero'], [copy.footer.about, '#about'], [copy.footer.work, '#work'], [copy.footer.skills, '#skills'], [copy.footer.process, '#process']];
  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-black text-white border-t border-line-dark">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 pt-20 sm:pt-24 lg:pt-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8 lg:gap-16">
          <div className="md:col-span-6 max-w-xl">
            <a href="#hero" className="inline-flex font-display text-2xl font-bold tracking-tight">
              pradea<span className="text-accent">®</span>
            </a>
            <h2 className="mt-7 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white">
              {copy.footer.title}
            </h2>
            <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-muted-soft">
              {copy.footer.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:pradea.dg@gmail.com?subject=Peluang%20Kolaborasi"
                className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-pill bg-near-black py-2 pl-2 pr-6 text-sm font-bold text-white group"
              >
                <AnimatedPillContent label={copy.footer.cta} icon={ArrowRight} />
              </a>
              <button
                type="button"
                onClick={onOpenCv}
                className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-pill bg-black py-2 pl-2 pr-6 text-sm font-bold text-white group"
              >
                <AnimatedPillContent label="Buka CV" icon={Download} />
              </button>
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Navigasi footer">
            <h3 className="text-lg font-semibold text-accent">{copy.footer.menu}</h3>
            <ul className="mt-7 space-y-4">
              {menuLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-base text-white transition-colors hover:text-accent">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-accent">{copy.footer.social}</h3>
            <ul className="mt-7 space-y-4">
              {socialLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group inline-flex items-center gap-2 text-base text-muted-soft transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
            <a href="mailto:pradea.dg@gmail.com" className="mt-8 inline-flex items-center gap-2 text-sm text-muted-soft hover:text-white">
              <Mail className="h-4 w-4 text-accent" />
              pradea.dg@gmail.com
            </a>
          </div>
        </div>

        <div className="relative mt-20 sm:mt-28 border-t border-line-dark pt-6 pb-4">
          <p className="text-xs sm:text-sm text-muted">© 2026 Pradea. All rights reserved.</p>
        </div>

        <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="translate-y-[30%] whitespace-nowrap font-display text-[clamp(5.5rem,18vw,18rem)] font-bold leading-[0.72] tracking-[-0.1 em] text-near-black/55">
            PRADEA®
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label={copy.footer.top}
        title={copy.footer.top}
        className="hero-button-motion group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-near-black text-white shadow-photo hover:bg-accent"
      >
        <ArrowUp className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </footer>
  );
};
