import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'id';
const STORAGE_KEY = 'pradea-language';

export const translations = {
  en: {
    nav: { work: 'Work', skills: 'Skills', process: 'Process', about: 'About', why: 'Why Me', cv: 'Download CV', fullCv: 'Download Full CV', open: 'Open navigation menu', close: 'Close navigation menu' },
    language: 'Language',
    hero: { available: 'Available for Work', portfolio: 'View portfolio', years: '7+ Years', experience: 'Experience', focusYears: '2+ Years', focus: 'UI/UX & Product Focus' },
    about: { eyebrow: 'Philosophy & Approach', title: 'A designer who understands business logic, not just visuals.', lead: '7+ years of design experience, now deepening my expertise in UI/UX, AI, and end-to-end product development.', bodyLead: 'I combine sharp user research with the technical ability to implement in code.', body: 'Starting in graphic design and branding, I have focused fully on UI/UX & Product Design since 2024, recently expanding my skills through certifications in Deep Learning, Generative AI, and Project Management (2026). Every visual decision is rooted in business goals—not just aesthetics.' },
    common: { contact: 'Contact me', details: 'More Details', openCv: 'Open Full CV' },
    work: { eyebrow: 'Selected Work', title: 'Designs that are built, launched, and truly work.', lead: 'End-to-end case studies: from research and measurable design systems to functional frontend execution.' },
    skills: { eyebrow: 'Skills & Capabilities', title: 'Designed with purpose. Built for real outcomes.', lead: 'Digital product design, modern frontend, and AI workflows combined into a fast, focused process.', scope: 'Areas of Practice:' },
    process: { eyebrow: 'Design Process', title: 'From complex problems to products ready to use.', lead: 'Four stages that keep design decisions relevant, measurable, and ready to become real products.', research: '01 — Research', researchDesc: 'Understanding problems and target users through research, accelerated by AI synthesis for persona mapping.', design: '02 — Design', designDesc: 'Creating wireframes and a design system that balance aesthetics and usability.', build: '03 — Build', buildDesc: 'Turning designs into working products through vibe coding with Next.js and Tailwind.', launch: '04 — Launch', launchDesc: 'Deploying and iterating based on real user feedback.' },
    why: { eyebrow: 'Why Me', title: 'Creative experience evolved into digital product expertise.', lead: 'Starting in creative design, I now help SaaS and fintech products grow through thoughtful UI/UX and AI-assisted workflows.', certifications: 'Certifications', about: 'About Me', previous: 'Previous certificates', next: 'Next certificates', credentialId: 'Credential ID', verify: 'Verify Credential', unavailable: 'Credential unavailable' },
    footer: { menu: 'Menu', social: 'Social', title: 'Good design feels simple, even when the problem is complex.', body: 'A product designer creating intuitive digital experiences that serve user needs and business goals.', cta: 'Get in touch', home: 'Home', about: 'About', work: 'Work', skills: 'Skills', process: 'Process', top: 'Back to top' },
    caseStudy: { back: 'Back to portfolio', live: 'View Live', overview: 'Overview', overviewTitle: 'One piece of context before the process.', role: 'Role', duration: 'Duration', status: 'Status', challenge: 'Challenge', research: 'Research', researchTitle: 'Finding patterns, not just assumptions.', insight: 'Key Insight', problem: 'Problem', problemTitle: 'What we know and what still needs validation.', validated: 'Validated findings', hypotheses: 'Working hypotheses', ideation: 'Ideation', ideationTitle: 'Exploring options before choosing a direction.', decision: 'Design Decision', decisionTitle: 'Every design response starts with a problem.', response: 'Design response', solution: 'Solution', solutionTitle: 'The solution, shown at full scale.', outcome: 'Outcome', currentOutcome: 'Current Outcome', outcomeTitle: 'What is already real today.', next: 'Next Step', nextTitle: 'What needs to be tested next.', learning: 'Key Learning', more: 'More Work', moreTitle: 'Continue to the next project.' },
  },
  id: {
    nav: { work: 'Karya', skills: 'Keahlian', process: 'Proses', about: 'Tentang', why: 'Kenapa Saya', cv: 'Unduh CV', fullCv: 'Unduh CV Lengkap', open: 'Buka menu navigasi', close: 'Tutup menu navigasi' },
    language: 'Bahasa',
    hero: { available: 'Tersedia untuk Bekerja', portfolio: 'Lihat portofolio', years: '7+ Tahun', experience: 'Pengalaman', focusYears: '2+ Tahun', focus: 'Fokus UI/UX & Product' },
    about: { eyebrow: 'Filosofi & Cara Kerja', title: 'Designer yang paham logika bisnis, bukan cuma tampilan.', lead: '7+ tahun pengalaman desain, kini memperdalam kemampuan di UI/UX, AI, dan pengembangan produk end-to-end.', bodyLead: 'Saya memadukan ketajaman riset pengguna dengan kapabilitas teknis implementasi kode.', body: 'Berangkat dari desain grafis dan branding, saya fokus penuh ke UI/UX & Product Design sejak 2024, dan baru saja memperluas kemampuan lewat sertifikasi Deep Learning, Generative AI, dan Manajemen Proyek (2026). Setiap keputusan visual berakar pada tujuan bisnis—bukan cuma soal tampil bagus.' },
    common: { contact: 'Hubungi saya', details: 'Selengkapnya', openCv: 'Buka CV Lengkap' },
    work: { eyebrow: 'Karya Pilihan', title: 'Desain yang dibangun, diluncurkan, dan benar-benar bekerja.', lead: 'Studi kasus end-to-end: dari riset, sistem desain yang terukur, hingga eksekusi frontend yang fungsional.' },
    skills: { eyebrow: 'Keahlian & Kapabilitas', title: 'Dikerjakan dengan tujuan. Dibangun untuk hasil nyata.', lead: 'Desain produk digital, frontend modern, dan workflow AI dipadukan menjadi proses kerja yang cepat dan tetap terarah.', scope: 'Cakupan Praktik:' },
    process: { eyebrow: 'Proses Kerja', title: 'Dari masalah yang kompleks menjadi produk yang siap dipakai.', lead: 'Empat tahap yang menjaga keputusan desain tetap relevan, terukur, dan dapat diwujudkan menjadi produk nyata.', research: '01 — Riset', researchDesc: 'Memahami masalah dan target pengguna lewat riset, dipercepat dengan sintesis AI untuk pemetaan user persona.', design: '02 — Desain', designDesc: 'Menyusun wireframe dan design system yang seimbang antara estetika dan usability.', build: '03 — Bangun', buildDesc: 'Vibe-coding dari desain jadi produk jalan dengan Next.js dan Tailwind.', launch: '04 — Rilis', launchDesc: 'Deploy dan iterasi berdasarkan feedback nyata dari pengguna.' },
    why: { eyebrow: 'Kenapa Saya', title: 'Pengalaman kreatif yang berkembang menjadi keahlian produk digital.', lead: 'Berangkat dari creative design, saya kini membantu produk SaaS dan fintech tumbuh lewat UI/UX yang matang dan workflow AI-assisted.', certifications: 'Sertifikasi', about: 'Tentang Saya', previous: 'Sertifikat sebelumnya', next: 'Sertifikat selanjutnya', credentialId: 'ID Kredensial', verify: 'Verifikasi Kredensial', unavailable: 'Kredensial belum tersedia' },
    footer: { menu: 'Menu', social: 'Sosial', title: 'Desain yang baik terasa sederhana, bahkan ketika masalahnya rumit.', body: 'Product designer yang merancang pengalaman digital intuitif, relevan dengan kebutuhan pengguna, dan selaras dengan tujuan bisnis.', cta: 'Hubungi saya', home: 'Beranda', about: 'Tentang', work: 'Karya', skills: 'Keahlian', process: 'Proses', top: 'Kembali ke atas' },
    caseStudy: { back: 'Kembali ke portofolio', live: 'Lihat Live', overview: 'Ringkasan', overviewTitle: 'Satu konteks sebelum masuk ke proses.', role: 'Peran', duration: 'Durasi', status: 'Status', challenge: 'Tantangan', research: 'Riset', researchTitle: 'Mencari pola, bukan sekadar asumsi.', insight: 'Insight Utama', problem: 'Masalah', problemTitle: 'Yang diketahui dan yang masih perlu dibuktikan.', validated: 'Temuan tervalidasi', hypotheses: 'Hipotesis kerja', ideation: 'Ideasi', ideationTitle: 'Membuka pilihan sebelum menetapkan arah.', decision: 'Keputusan Desain', decisionTitle: 'Setiap respons desain berangkat dari masalah.', response: 'Respons desain', solution: 'Solusi', solutionTitle: 'Solusi, ditunjukkan dalam skala penuh.', outcome: 'Hasil', currentOutcome: 'Hasil Saat Ini', outcomeTitle: 'Apa yang sudah nyata hari ini.', next: 'Langkah Berikutnya', nextTitle: 'Yang perlu diuji berikutnya.', learning: 'Pembelajaran Utama', more: 'Karya Lain', moreTitle: 'Lanjut ke karya berikutnya.' },
  },
} as const;

type Value = { language: Language; setLanguage: (language: Language) => void; copy: typeof translations.en | typeof translations.id };
const Context = createContext<Value | null>(null);
export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setState] = useState<Language>(() => typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'id' ? 'id' : 'en');
  const setLanguage = useCallback((next: Language) => { setState(next); localStorage.setItem(STORAGE_KEY, next); }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, copy: translations[language] }), [language, setLanguage]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useLanguage = () => {
  const value = useContext(Context);
  if (!value) throw new Error('useLanguage must be used within LanguageProvider');
  return value;
};
