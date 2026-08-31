import { Project, SkillAccordionItem, ProcessItem, Certificate } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'fazch',
    number: '01',
    title: 'FAZCH — Fashion Muslim E-Commerce',
    tagline: 'Live Product',
    category: 'E-Commerce · Next.js · Full-Stack UI/UX',
    cardTag: 'E-Commerce · Next.js',
    cardDescription: 'Website independen untuk brand fashion muslim, dibangun dari desain sampai deployment dengan integrasi pembayaran Midtrans.',
    coverImage: '/fazch-cover.png',
    description: 'Website independen untuk brand fashion muslim, dibangun dari desain sampai deployment dengan integrasi pembayaran Midtrans.',
    tags: ['Figma', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Midtrans API'],
    role: 'Product Designer & Frontend Engineer',
    duration: '3 Bulan (2025)',
    statusBadge: {
      text: 'Live Product',
      variant: 'live'
    },
    liveDemoAvailable: true,
    liveUrl: 'https://fazch.vercel.app/',
    highlights: [
      'Alur checkout 3-langkah yang ringkas',
      'Integrasi 3 metode pembayaran (QRIS, VA, E-Wallet) tanpa hambatan',
      'Design system modular untuk pengembangan lanjutan',
      'Arsitektur mobile-first'
    ],
    designProcess: [
      {
        step: '01',
        title: 'Empathize',
        description: 'Mengamati perilaku belanja fashion muslim di marketplace sebagai pembanding: alur checkout berbelit, minim kepercayaan ke toko independen, kurang info produk.'
      },
      {
        step: '02',
        title: 'Define',
        description: 'Problem statement: pembeli butuh checkout cepat dan tepercaya di luar marketplace, tanpa kehilangan kenyamanan yang biasa mereka rasakan.'
      },
      {
        step: '03',
        title: 'Ideate',
        description: 'Checkout 3 langkah, trust signal (badge verified, stok real-time), navigasi kategori pria & anak terpisah.'
      },
      {
        step: '04',
        title: 'Prototype',
        description: 'Wireframe ke high-fidelity di Figma, disusun sebagai design system dengan komponen reusable.'
      },
      {
        step: '05',
        title: 'Build & Test',
        description: 'Next.js + Tailwind, integrasi Midtrans (QRIS/VA/E-Wallet), pengujian alur checkout dan mobile-first.'
      }
    ],
    previewType: 'fazch',
    caseStudyDetails: {
      problem: 'Brand fashion muslim independen membutuhkan storefront digital yang mencerminkan estetika minimalis modern sekaligus menangani transaksi tanpa membuat calon pembeli ragu.',
      solution: 'Merancang arsitektur informasi terstruktur dari riset perilaku pembeli, prototipe Figma presisi tinggi, hingga coding langsung frontend interaktif dengan Next.js dan integrasi Midtrans otomatis.'
    }
  },
  {
    id: 'credit-risk',
    number: '02',
    title: 'Credit Risk Management Dashboard',
    tagline: 'Fintech · Figma · In Progress',
    modalBadge: '02 — Fintech · Figma · In Progress',
    category: 'SaaS Fintech · Design System · Complex Data',
    cardTag: 'Fintech · Figma',
    cardDescription: 'Design system dan dashboard untuk tim risk fintech — skor risiko, fraud badge, decision log.',
    coverImage: '/finrisk-cover.png',
    description: 'Design system dan dashboard untuk tim risk fintech — skor risiko, fraud badge, decision log.',
    tags: ['Figma', 'Notion'],
    role: 'UI/UX & Design System',
    duration: 'Tahap Desain Awal',
    modalVariant: 'credit-risk-minimal',
    statusBadge: {
      text: 'In Progress',
      variant: 'ongoing'
    },
    liveDemoAvailable: false,
    unavailableNote: 'UI dashboard sedang dalam pengembangan.',
    highlights: [
      'Skor risiko multi-parameter & confidence threshold AI',
      'Decision matrix 4 kuadran & 5-branch decision tree',
      'Role permission matrix & audit trail governance'
    ],
    previewType: 'fintech',
    figmaUrl: 'https://figma.com'
  },
  {
    id: 'anvieo',
    number: '03',
    title: 'Anvieo — Composite ERP & AI Platform',
    modalBadge: '04 — Product Design · Composite ERP & AI · Hackathon Digdaya x BI 2026',
    modalSubtext: 'Tim Cau Gedang · Sejak April 2026 · Masih dikembangkan',
    tagline: 'Composite ERP & AI Platform · Hackathon BI 2026',
    category: 'Composite ERP & AI Platform · In Progress',
    cardTag: 'Composite ERP & AI',
    cardDescription: 'Platform ERP + AI Engine (GARDA) untuk UMKM Indonesia, tervalidasi lewat dua pilot partner nyata.',
    coverImage: '/anvieo-cover.png',
    description: 'Platform ERP + AI Engine (GARDA) untuk UMKM Indonesia, tervalidasi lewat dua pilot partner nyata.',
    tags: ['Figma'],
    role: 'UI/UX Designer: dashboard, GARDA Chat interface, Dynamic UI Template',
    duration: 'April 2026 – sekarang',
    statusText: 'Tim Cau Gedang · Sejak April 2026 · Masih dikembangkan',
    modalVariant: 'anvieo-in-progress',
    statusBadge: {
      text: 'In Progress',
      variant: 'ongoing'
    },
    liveDemoAvailable: true,
    liveUrl: 'https://anvieo.com/',
    highlights: [
      'Dashboard operasional multi-modul & GARDA AI Engine',
      'Antarmuka GARDA Chat conversational natural language query',
      'Dynamic UI template yang menyesuaikan per tenant'
    ],
    designHighlights: [
      'Dashboard operasional multi-modul yang mengelola Sales, Inventori, Akuntansi, dan Distribusi real-time.',
      'Antarmuka GARDA Chat (natural language query) untuk konsultasi insight & anomali bisnis 24/7.',
      'Dynamic UI Template yang menyesuaikan tampilan otomatis berdasarkan modul aktif tiap tenant.'
    ],
    previewType: 'anvieo'
  }
];

export const SKILL_ACCORDION_ITEMS: SkillAccordionItem[] = [
  {
    id: 'ui-ux',
    number: '01',
    title: 'UI/UX Design',
    chips: ['Figma', 'User Research', 'Design Systems', 'Prototyping', 'Fintech UX'],
    description: 'Riset, wireframe, sampai design system lengkap, termasuk dashboard fintech dengan logika bisnis kompleks.',
    details: [
      'Menyusun Information Architecture & Wireframing berdaya guna tinggi',
      'Menerjemahkan business logic kompleks (risk rules, threshold, decision tree) menjadi UI yang intuitif dan explainable',
      'Pembuatan Design System berbasis Tokens (Color, Spacing, Typography, Components)',
      'High-Fidelity Interactive Prototyping dengan micro-interactions responsif'
    ]
  },
  {
    id: 'frontend',
    number: '02',
    title: 'Frontend & Full-Stack Development',
    chips: ['Next.js', 'Tailwind', 'TypeScript', 'React', 'Supabase'],
    description: 'Mampu membangun antarmuka web modern langsung dari kanvas desain ke kode produksi yang bersih, modular, dan siap deploy — termasuk arsitektur backend dan data di baliknya.',
    details: [
      'Modern React 19 / Next.js dengan arsitektur komponen fungsional',
      'Tailwind CSS untuk styling presisi berstandar pixel-perfect',
      'Integrasi backend dengan Supabase (schema, storage bucket, API route) dan payment gateway (Midtrans)',
      'Merancang Row Level Security (RLS) dan permission layer untuk sistem admin/CMS',
      'Optimasi performa Core Web Vitals dan SEO teknis'
    ]
  },
  {
    id: 'ai-workflow',
    number: '03',
    title: 'AI-assisted Workflow',
    chips: ['Generative AI', 'Deep Learning', 'Vibe coding', 'Prompt Engineering'],
    description: 'Mempercepat siklus riset, eksplorasi variasi desain, hingga penulisan kode melalui pendekatan vibe-coding dan tooling kecerdasan buatan terdepan.',
    details: [
      'Vibe coding untuk rapid prototyping dari ide sketsa ke working software',
      'Menerapkan dasar deep learning & generative AI (image/text/audio generation) untuk mempercepat riset dan eksplorasi desain',
      'Sintesis data riset kualitatif & pembuatan user persona menggunakan Generative AI',
      'Eksplorasi copy, transkripsi user feedback, dan otomasi workflow desain'
    ]
  }
];

export const PROCESS_ITEMS: ProcessItem[] = [
  {
    number: '01',
    title: 'Riset',
    theme: 'light',
    description: 'Memahami masalah dan target pengguna lewat riset, dipercepat dengan sintesis AI untuk pemetaan user persona.',
    iconName: 'Search',
    subPoints: ['Stakeholder Interviews', 'User Journey Mapping', 'Competitive Benchmarking']
  },
  {
    number: '02',
    title: 'Desain',
    theme: 'dark',
    description: 'Menyusun wireframe dan design system yang seimbang antara estetika dan usability.',
    iconName: 'LayoutGrid',
    subPoints: ['Information Architecture', 'Design System & Tokens', 'Hi-Fi Figma Prototyping']
  },
  {
    number: '03',
    title: 'Bangun',
    theme: 'light',
    description: 'Vibe-coding dari desain jadi produk jalan dengan Next.js dan Tailwind.',
    iconName: 'Code2',
    subPoints: ['Component Engineering', 'API Integration & Logic', 'Performance & Accessibility']
  },
  {
    number: '04',
    title: 'Rilis',
    theme: 'dark',
    description: 'Deploy dan iterasi berdasarkan feedback nyata dari pengguna.',
    iconName: 'Rocket',
    subPoints: ['Cloud Deployment', 'Live Analytics Tracking', 'Continuous UX Iteration']
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Fundamental Deep Learning',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    category: 'AI & Machine Learning'
  },
  {
    title: 'Penerapan Generative AI untuk Produktivitas',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    category: 'Generative AI'
  },
  {
    title: 'Prinsip Dasar UX Design & Research',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    category: 'Product Design'
  },
  {
    title: 'Dasar Manajemen Proyek',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    category: 'Project Management'
  },
  {
    title: 'Sertifikat Partisipasi Hackathon PIDI Digdaya x BI 2026',
    issuer: 'Bank Indonesia & PIDI 4.0',
    year: '2026',
    category: 'Hackathon Finalist'
  },
  {
    title: 'Certificate of Achievement',
    issuer: 'Rakamin Academy',
    year: '2024',
    category: 'Achievement'
  },
  {
    title: 'Certificate of Completion UI/UX Design',
    issuer: 'Rakamin Academy',
    year: '2024',
    category: 'UI/UX Design'
  },
  {
    title: 'Bootcamp Full Stack UI/UX',
    issuer: 'Rakamin Academy',
    year: '2024',
    category: 'Bootcamp UI/UX'
  }
];

export const TOOLS_LIST = [
  'Notion',
  'Maze',
  'Figma',
  'Adobe Creative Suite',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'Git / GitHub',
  'Midtrans API'
];