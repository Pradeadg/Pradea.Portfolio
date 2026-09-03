import React, { useState } from 'react';
import { X, Download, Mail, Phone, MapPin, Briefcase, Award, CheckCircle, ExternalLink, FileText, Sparkles, Printer } from 'lucide-react';
import { CERTIFICATES, TOOLS_LIST } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pradea.dg@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FFFFFF] text-[#111111] w-full max-w-4xl max-h-[90vh] rounded-[20px] shadow-2xl flex flex-col overflow-hidden border border-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="bg-[#0A0A0A] text-white px-6 py-4 flex items-center justify-between border-b border-[#222222]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF3B30] text-white flex items-center justify-center font-extrabold text-sm">
              at
            </div>
            <div>
              <div className="font-extrabold text-sm">Curriculum Vitae — adam teja®</div>
              <div className="text-xs text-[#8A8A85] font-mono">Product & UI/UX Designer · 2026 Edition</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full bg-[#1F1F1F] text-white text-xs font-semibold hover:bg-[#2A2A2A] transition-colors flex items-center gap-1.5 border border-[#333333]"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#FF3B30]" />
              <span className="hidden sm:inline">Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#1F1F1F] text-[#8A8A85] hover:text-white hover:bg-[#2A2A2A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 print:p-0">
          {/* Personal Info Header */}
          <div className="border-b border-[#E5E5E5] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-block text-xs font-mono text-[#FF3B30] uppercase tracking-wider font-semibold mb-1">
                Product & UI/UX Designer
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
                Adam Teja
              </h1>
              <p className="text-[#8A8A85] text-sm mt-1 max-w-xl">
                UI/UX Designer 6+ tahun pengalaman yang juga mampu membangun produk dari riset, wireframe, sampai deployment produksi.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-[#555555] font-mono bg-[#F1F0EC] p-3.5 rounded-xl">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF3B30]" /> Bogor, Jawa Barat, Indonesia
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF3B30]" /> pradea.dg@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-[#22C55E]" /> Terbuka: Full-time / Remote
              </div>
            </div>
          </div>

          {/* Ringkasan Eksekutif */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#8A8A85] font-bold mb-2">
              01 // Ringkasan Profesional
            </h2>
            <p className="text-[#222222] text-sm leading-relaxed">
              Product & UI/UX Designer dengan rekam jejak 6+ tahun menyelesaikan 80+ proyek desain di beragam industri termasuk SaaS, Fintech, E-Commerce, dan HealthTech. Memiliki keunggulan hybrid: mendalam di ranah user research & design system (Figma tokens), sekaligus menguasai frontend engineering (Next.js, Tailwind CSS, TypeScript) serta workflow berbasis Generative AI untuk merealisasikan konsep menjadi produk riil yang fungsional.
            </p>
          </div>

          {/* Pengalaman Kerja */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#8A8A85] font-bold mb-4">
              02 // Pengalaman Relevan
            </h2>

            <div className="space-y-6">
              {/* Experience 1 */}
              <div className="relative pl-6 border-l-2 border-[#111111] space-y-1.5">
                <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#FF3B30]"></span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-base font-extrabold text-[#0A0A0A]">
                    Lead Product Designer & Builder — FAZCH Studio
                  </h3>
                  <span className="text-xs font-mono text-[#8A8A85]">2025 — Sekarang</span>
                </div>
                <p className="text-xs text-[#555555]">E-Commerce Fashion Muslim Independen</p>
                <ul className="text-xs text-[#333333] list-disc list-inside space-y-1 pt-1">
                  <li>Merancang identitas visual, arsitektur informasi, serta design system modular 40+ komponen di Figma.</li>
                  <li>Membangun langsung kode frontend menggunakan Next.js dan Tailwind CSS dengan integrasi payment gateway Midtrans.</li>
                  <li>Meningkatkan rasio konversi checkout sebesar +42% melalui simplifikasi checkout 3-langkah dan navigasi mobile teroptimasi.</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-6 border-l-2 border-[#E5E5E5] space-y-1.5">
                <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#8A8A85]"></span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-base font-extrabold text-[#0A0A0A]">
                    Senior UI/UX & Design System Specialist — Fintech Client Projects
                  </h3>
                  <span className="text-xs font-mono text-[#8A8A85]">2023 — 2025</span>
                </div>
                <p className="text-xs text-[#555555]">Credit Risk Management System & Dashboard</p>
                <ul className="text-xs text-[#333333] list-disc list-inside space-y-1 pt-1">
                  <li>Membangun design system komprehensif 200+ token warna, tipografi, dan state interaksi untuk visualisasi risiko kredit.</li>
                  <li>Mendesain alur keputusan cepat (decision log, fraud flags, audit trail) yang memangkas waktu analisis tim risk analyst hingga 65%.</li>
                  <li>Menyelaraskan standar usability dengan kepatuhan regulasi finansial OJK dan perlindungan privasi data.</li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div className="relative pl-6 border-l-2 border-[#E5E5E5] space-y-1.5">
                <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#8A8A85]"></span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-base font-extrabold text-[#0A0A0A]">
                    UI/UX Designer & Product Lead — Anvieo (Digdaya x BI 2026)
                  </h3>
                  <span className="text-xs font-mono text-[#8A8A85]">2026 (Kompetisi Hackathon)</span>
                </div>
                <p className="text-xs text-[#555555]">Sistem Kasir Pintar (POS) dengan GARDA AI Engine</p>
                <ul className="text-xs text-[#333333] list-disc list-inside space-y-1 pt-1">
                  <li>Mendesain interface kasir responsif untuk transaksi di bawah 5 detik yang terintegrasi dengan modul prediksi restock AI.</li>
                  <li>Membawa tim mencapai babak finalis berkat eksekusi prototipe interaktif berkecepatan tinggi dalam tempo 48 jam.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Keahlian & Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#8A8A85] font-bold mb-3">
                03 // Keahlian Utama
              </h2>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]"></span>
                  <span className="font-semibold text-[#111111]">Product Design:</span>
                  <span className="text-[#555555]">User Research, Wireframing, Figma, Prototyping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]"></span>
                  <span className="font-semibold text-[#111111]">Design Systems:</span>
                  <span className="text-[#555555]">Atomic Design, Token Variables, Auto-Layout</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]"></span>
                  <span className="font-semibold text-[#111111]">Frontend Dev:</span>
                  <span className="text-[#555555]">Next.js, Tailwind CSS, TypeScript, React, Git</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]"></span>
                  <span className="font-semibold text-[#111111]">AI Workflows:</span>
                  <span className="text-[#555555]">Vibe Coding, Deep Learning, Gen-AI Synthesis</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#8A8A85] font-bold mb-3">
                04 // Sertifikasi & Bootcamp Resmi (8)
              </h2>
              <div className="space-y-2 text-xs max-h-[220px] overflow-y-auto pr-1">
                {CERTIFICATES.map((c, i) => (
                  <div key={i} className="flex items-start justify-between gap-2 border-b border-[#F1F0EC] pb-1.5">
                    <div>
                      <div className="font-semibold text-[#111111]">{c.title}</div>
                      <div className="text-[11px] text-[#8A8A85]">{c.issuer}</div>
                    </div>
                    <span className="font-mono text-[10px] text-[#FF3B30] bg-[#FFF0EF] px-1.5 py-0.5 rounded font-bold">
                      {c.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#F1F0EC] px-6 py-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#555555]">
            Ingin mendiskusikan peluang kerja? Langsung jadwalkan interview.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className="flex-1 sm:flex-none px-4 py-2 rounded-full border border-[#111111] text-[#111111] text-xs font-bold hover:bg-[#FFFFFF] transition-colors flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              {copied ? 'Email Tersalin!' : 'Salin Email'}
            </button>
            <a
              href="mailto:pradea.dg@gmail.com?subject=Undangan%20Interview%20Product%20UI%2FUX%20Designer"
              className="flex-1 sm:flex-none px-5 py-2 rounded-full bg-[#0A0A0A] text-white text-xs font-bold hover:bg-[#222222] transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Kirim Email Langsung</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FF3B30]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
