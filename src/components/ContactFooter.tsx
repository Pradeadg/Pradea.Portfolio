import React, { useState } from 'react';
import { Download, Mail, MessageSquare, ArrowUpRight, Check, Send, Phone, MapPin, Globe, Sparkles } from 'lucide-react';

interface ContactFooterProps {
  onOpenCv: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenCv }) => {
  const [copied, setCopied] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pradea.dg@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setShowEmailForm(false);
      setFormState({ name: '', email: '', company: '', message: '' });
    }, 2500);
  };

  return (
    <footer 
      id="contact" 
      className="bg-black text-white pt-24 pb-12 border-t border-line-dark"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Main Centered CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-28 items-start pb-20 border-b border-line-dark">
          <div className="lg:col-span-6 space-y-4">
          
          <div className="font-display text-xl sm:text-2xl text-accent font-semibold">
            GET IN TOUCH · OPEN FOR OPPORTUNITIES
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Punya tantangan produk? Mari kerja bareng.
          </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-12">
          <p className="font-display text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-white max-w-xl">
            Terbuka untuk role Product & UI/UX Designer — full-time atau remote.
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-8">
            <button
              onClick={onOpenCv}
              id="footer-btn-cv"
              className="px-8 py-4 rounded-pill bg-white text-black text-sm font-extrabold hover:bg-gray-bg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4 text-accent" />
            </button>

            <a
              href="mailto:pradea.dg@gmail.com?subject=Peluang%20Kerja%20Product%20UI%2FUX%20Designer"
              id="footer-btn-email"
              className="px-8 py-4 rounded-pill bg-transparent text-white border border-line-dark text-sm font-bold hover:border-white hover:bg-near-black transition-all flex items-center gap-2"
            >
              <span>Kirim email</span>
              <Mail className="w-4 h-4 text-muted-soft" />
            </a>
          </div>

          {/* Direct quick message toggle */}
          <div className="pt-2">
            <button
              onClick={() => setShowEmailForm(!showEmailForm)}
              className="text-xs text-muted-soft hover:text-white transition-colors underline underline-offset-4"
            >
              {showEmailForm ? 'Tutup Formulir Cepat' : 'Atau kirim pesan langsung dari sini'}
            </button>
          </div>

          {/* Quick Message Box if opened */}
          {showEmailForm && (
            <div className="mt-6 p-6 bg-near-black border border-line-dark rounded-card text-left animate-in fade-in max-w-lg">
              {formSent ? (
                <div className="text-center py-6 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#18331E] text-[#4ADE80] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-white">Pesan Berhasil Terkirim!</div>
                  <div className="text-xs text-[#8A8A85]">Terima kasih. Saya akan merespons dalam waktu 1x24 jam.</div>
                </div>
              ) : (
                <form onSubmit={handleSendForm} className="space-y-4">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>Kirim Pesan ke Adam Teja</span>
                    <span className="text-[10px] font-mono text-[#8A8A85]">pradea.dg@gmail.com</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-black border border-line-dark rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-accent"
                    />
                    <input
                      type="email"
                      placeholder="Email Perusahaan"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-black border border-line-dark rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Nama Perusahaan / Peran (Opsional)"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-black border border-line-dark rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-accent"
                  />
                  <textarea
                    placeholder="Tuliskan detail tawaran kerja atau proyek..."
                    rows={3}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-black border border-line-dark rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-accent"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-pill bg-accent text-white text-xs font-bold hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}
            </div>
          )}
          </div>
        </div>

        {/* Small Footer Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8A8A85]">
          
          {/* Brand & Location Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-extrabold text-white text-sm">pradea®</span>
            <span className="hidden sm:inline text-[#444]">•</span>
            <span className="flex items-center gap-1 font-mono">
              <MapPin className="w-3 h-3 text-accent" /> Bogor, Indonesia
            </span>
            <span className="hidden sm:inline text-[#444]">•</span>
            <span>© 2026. All rights reserved.</span>
          </div>

          {/* Social Links: WhatsApp, Email, LinkedIn, Behance, GitHub */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs">
            <a
              href="https://wa.me/6285819699796?text=Halo%20Pradea,%20saya%20tertarik%20dengan%20portofolio%20desain%20Anda"
              target="_blank"
              rel="noreferrer"
              className="text-muted-soft hover:text-accent transition-colors flex items-center gap-1"
            >
              WhatsApp <ArrowUpRight className="w-3 h-3 text-[#8A8A85]" />
            </a>

            <a
              href="mailto:pradea.dg@gmail.com"
              className="text-muted-soft hover:text-accent transition-colors flex items-center gap-1"
            >
              Email <ArrowUpRight className="w-3 h-3 text-[#8A8A85]" />
            </a>

            <a
              href="https://www.linkedin.com/in/pradea-dg-13456425a/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-soft hover:text-accent transition-colors flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3 text-[#8A8A85]" />
            </a>

            <a
              href="https://www.behance.net/kaibahidek0fd2"
              target="_blank"
              rel="noreferrer"
              className="text-muted-soft hover:text-accent transition-colors flex items-center gap-1"
            >
              Behance <ArrowUpRight className="w-3 h-3 text-[#8A8A85]" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
