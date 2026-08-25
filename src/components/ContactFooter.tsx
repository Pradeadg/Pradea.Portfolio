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
    navigator.clipboard.writeText('adamteja.design@gmail.com');
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
      className="bg-[#0A0A0A] text-white pt-24 pb-12 border-t border-[#1C1C1C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Centered CTA Block */}
        <div className="max-w-3xl mx-auto text-center space-y-6 pb-20 border-b border-[#222222]">
          
          <div className="inline-block text-xs font-mono text-[#FF3B30] uppercase tracking-wider font-bold">
            GET IN TOUCH · OPEN FOR OPPORTUNITIES
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] text-white leading-tight">
            Mari kerja bareng.
          </h2>

          <p className="text-base sm:text-lg text-[#8A8A85] max-w-xl mx-auto">
            Terbuka untuk role Product & UI/UX Designer — full-time atau remote.
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenCv}
              id="footer-btn-cv"
              className="px-8 py-4 rounded-full bg-white text-[#0A0A0A] text-sm font-extrabold hover:bg-[#F1F0EC] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4 text-[#FF3B30]" />
            </button>

            <a
              href="mailto:adamteja.design@gmail.com?subject=Peluang%20Kerja%20Product%20UI%2FUX%20Designer%20-%20Adam%20Teja"
              id="footer-btn-email"
              className="px-8 py-4 rounded-full bg-transparent text-white border border-[#3A3A3A] text-sm font-bold hover:border-white hover:bg-[#141414] transition-all flex items-center gap-2"
            >
              <span>Kirim email</span>
              <Mail className="w-4 h-4 text-[#8A8A85]" />
            </a>
          </div>

          {/* Direct quick message toggle */}
          <div className="pt-2">
            <button
              onClick={() => setShowEmailForm(!showEmailForm)}
              className="text-xs font-mono text-[#8A8A85] hover:text-white transition-colors underline underline-offset-4"
            >
              {showEmailForm ? 'Tutup Formulir Cepat' : 'Atau kirim pesan langsung dari sini'}
            </button>
          </div>

          {/* Quick Message Box if opened */}
          {showEmailForm && (
            <div className="mt-6 p-6 bg-[#141414] border border-[#2A2A2A] rounded-[20px] text-left animate-in fade-in max-w-lg mx-auto">
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
                    <span className="text-[10px] font-mono text-[#8A8A85]">adamteja.design@gmail.com</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-[#0A0A0A] border border-[#333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF3B30]"
                    />
                    <input
                      type="email"
                      placeholder="Email Perusahaan"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-[#0A0A0A] border border-[#333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF3B30]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Nama Perusahaan / Peran (Opsional)"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-[#333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF3B30]"
                  />
                  <textarea
                    placeholder="Tuliskan detail tawaran kerja atau proyek..."
                    rows={3}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-[#333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF3B30]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-[#FF3B30] text-white text-xs font-bold hover:bg-[#E03026] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Small Footer Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8A8A85]">
          
          {/* Brand & Location Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-extrabold text-white text-sm">pradea®</span>
            <span className="hidden sm:inline text-[#444]">•</span>
            <span className="flex items-center gap-1 font-mono">
              <MapPin className="w-3 h-3 text-[#FF3B30]" /> Bogor, Indonesia
            </span>
            <span className="hidden sm:inline text-[#444]">•</span>
            <span>© 2026. All rights reserved.</span>
          </div>

          {/* Social Links: WhatsApp, Email, LinkedIn, Behance, GitHub */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Adam,%20saya%20tertarik%20dengan%20portofolio%20desain%20Anda"
              target="_blank"
              rel="noreferrer"
              className="text-[#D1D1D0] hover:text-[#FF3B30] transition-colors flex items-center gap-1"
            >
              WhatsApp <ArrowUpRight className="w-3 h-3 text-[#8A8A85]" />
            </a>

            <a
              href="mailto:pradea.dg@gmail.com"
              className="text-[#D1D1D0] hover:text-[#FF3B30] transition-colors flex items-center gap-1"
            >
              Email <ArrowUpRight className="w-3 h-3 text-[#8A8A85]" />
            </a>

            <a
              href="https://linkedin.com/in/adamteja"
              target="_blank"
              rel="noreferrer"
              className="text-[#D1D1D0] hover:text-[#FF3B30] transition-colors flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3 text-[#8A8A85]" />
            </a>

            <a
              href="https://behance.net/adamteja"
              target="_blank"
              rel="noreferrer"
              className="text-[#D1D1D0] hover:text-[#FF3B30] transition-colors flex items-center gap-1"
            >
              Behance <ArrowUpRight className="w-3 h-3 text-[#8A8A85]" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
