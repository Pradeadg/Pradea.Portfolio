export interface StructuredCaseStudy {
  id: string;
  headerBadge: {
    text: string;
    variant: 'live' | 'amber' | 'accent';
  };
  title: string;
  subtext: string;
  challenge: string;
  whatWeLearned: string[];
  opportunity: string;
  solution: string[];
  validation: string;
  outcome: string;
  tools: string[];
  liveDemoAvailable: boolean;
  liveUrl?: string;
  statusNote?: string;
  customLiveButtonLabel?: string;
}

export const CASE_STUDIES_DATA: Record<string, StructuredCaseStudy> = {
  fazch: {
    id: 'fazch',
    headerBadge: {
      text: '01 — Live Product · E-Commerce · Next.js · Full-Stack UI/UX',
      variant: 'live'
    },
    title: 'FAZCH',
    subtext: 'E-Commerce · Next.js · Full-Stack UI/UX',
    challenge:
      'Brand fashion muslim independen butuh storefront digital yang mencerminkan estetika minimalis modern, sekaligus mampu menangani proses checkout tanpa membuat calon pembeli ragu — bersaing langsung dengan kenyamanan belanja di marketplace besar.',
    whatWeLearned: [
      'Alur checkout marketplace konvensional cenderung berbelit untuk toko independen yang ingin replikasi pengalaman serupa',
      'Kepercayaan adalah hambatan utama belanja di luar marketplace — tanpa trust signal, calon pembeli ragu memasukkan data pembayaran',
      'Informasi produk yang tidak lengkap meningkatkan keraguan sebelum checkout'
    ],
    opportunity:
      'Membangun storefront independen dengan trust signal eksplisit dan alur checkout seringkas mungkin, sehingga brand bisa mengonversi pembeli yang terbiasa di marketplace tanpa kehilangan rasa aman yang biasa mereka dapat.',
    solution: [
      'Alur checkout 3 langkah (keranjang → data → pembayaran)',
      'Trust signal eksplisit: badge "Midtrans Verified", info stok real-time',
      'Navigasi kategori terpisah (Pria/Anak)',
      'Design system tipografi Urbanist (heading) + DM Sans (body), palet monokrom (#ffffff, #1f1f1f, #8e8e8e, #cacaca)',
      'Next.js + Tailwind CSS, integrasi Midtrans (QRIS, VA, E-Wallet)'
    ],
    validation:
      'Divalidasi lewat review internal terhadap alur checkout dan konsistensi komponen desain sebelum deployment; validasi ke pembeli asli menyusul seiring traffic bertambah.',
    outcome:
      'Produk live di fazch.vercel.app dengan alur checkout 3-langkah, tiga metode pembayaran terintegrasi tanpa hambatan, dan design system modular yang siap dikembangkan untuk fitur lanjutan.',
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Midtrans API'],
    liveDemoAvailable: true,
    liveUrl: 'https://fazch.vercel.app/',
    customLiveButtonLabel: 'Lihat Demo Live'
  },
  anvieo: {
    id: 'anvieo',
    headerBadge: {
      text: '04 — Product Design · Composite ERP & AI · Hackathon Digdaya x BI 2026',
      variant: 'amber'
    },
    title: 'Anvieo — Composite ERP & AI Platform',
    subtext: 'Tim Cau Gedang · Sejak April 2026 · Masih dikembangkan',
    challenge:
      '64 juta UMKM Indonesia menyumbang lebih dari 60% PDB nasional, tapi 90% di antaranya tidak memiliki satu sistem pun untuk mengelola bisnisnya. Empat masalah sistemik yang berulang: data tersebar di WhatsApp/Excel/nota tanpa saling terhubung, monitoring dilakukan manual lewat telepon satu per satu (4+ jam sehari), keputusan bisnis diambil dari feeling bukan data, dan masalah baru diketahui setelah 30 hari — atau tidak diketahui sama sekali.',
    whatWeLearned: [
      'GT Wash Indonesia (Model SaaS): Pelopor shampoo touchless dengan jaringan kemitraan nasional. Monitoring manual 4+ jam/hari, repeat order sering terlewat, compliance tidak terpantau. Hasil: Mengonfirmasi kebutuhan nyata terhadap Anvieo',
      'PT Pixel Perdana Jaya (Model Managed Service): Distributor elektronik nasional dengan 8 cabang dan 30+ brand dunia. Stok tersebar di Google Sheet per cabang, service management manual di Excel, ratusan chat WhatsApp per hari tanpa tracking. Hasil: Menyatakan minat sebagai klien Managed Service'
    ],
    opportunity:
      'Menggabungkan dua teknologi besar — ERP sebagai tubuh bisnis dan AI sebagai otak bisnis — menjadi satu platform composable modular yang mencakup lintas industri, dengan positioning sebagai satu-satunya pemain yang unggul di dua sumbu sekaligus: kecocokan untuk UMKM dan kapabilitas AI.',
    solution: [
      'Anvieo (Composite ERP) — mengelola operasional inti: Sales, Inventori, Akuntansi, Distribusi, Monitoring real-time',
      'GARDA AI (AI Engine) — monitoring 24/7, deteksi anomali, prediksi tren, rekomendasi tindakan, GARDA Chat (natural language query)',
      '3 Langkah Growth Journey: Identifikasi (profiling GARDA 3 menit) → Aktifkan Modul (rekomendasi otomatis, pay-as-you-grow) → Jalankan Bisnis (dashboard + monitoring 24/7)',
      '4 fitur unggulan: Real-Time Async Automated HPP Engine, Absolute Privacy Isolation Architecture (1 Tenant = 1 Schema), AI-Powered Fraud Detection Engine, Geofencing & Smart HCM',
      'Kontribusi desain personal: dashboard utama, antarmuka GARDA Chat, dan dynamic UI template yang menyesuaikan tampilan berdasarkan modul aktif tiap tenant'
    ],
    validation:
      'Divalidasi langsung ke dua pilot partner dengan model bisnis berbeda (SaaS dan Managed Service) — keduanya mengonfirmasi masalah yang diidentifikasi benar-benar dialami di lapangan, dan salah satunya (PT Pixel Perdana Jaya) sudah menyatakan minat konkret untuk menjadi klien.',
    outcome:
      'Pengembangan berjalan pasca hackathon dengan validasi pasar nyata dan persiapan pilot deployment.',
    tools: ['Figma'],
    liveDemoAvailable: true,
    liveUrl: 'https://anvieo.com/',
    customLiveButtonLabel: 'Lihat Live Site'
  },
  'credit-risk': {
    id: 'credit-risk',
    headerBadge: {
      text: '02 — Fintech · Figma · In Progress',
      variant: 'amber'
    },
    title: 'Credit Risk Management Dashboard',
    subtext: 'Risk decision engine untuk enterprise — dari logic ke sistem',
    challenge:
      'Tim finance & risk di enterprise sering mengambil keputusan approve/reject transaksi secara tidak konsisten — tanpa aturan jelas kapan AI bisa dipercaya penuh, kapan wajib direview manusia, dan siapa yang punya wewenang override. Tujuannya: memberikan decision clarity dalam 30 detik kepada risk analyst, tanpa mengorbankan akurasi maupun kepatuhan.',
    whatWeLearned: [
      'Risk score saja tidak cukup — confidence level AI sama pentingnya untuk menentukan aksi yang tepat',
      '5 kontributor risiko utama: debt-to-income ratio, cash flow volatility, vendor history compliance, fraud flag signals, document inconsistency',
      'Tiap role butuh batasan akses berbeda — tanpa itu, override bisa terjadi tanpa akuntabilitas',
      'Automation yang buta terhadap confidence berisiko mengambil keputusan otomatis di kasus ambigu'
    ],
    opportunity:
      'Merancang sistem yang menggabungkan risk score dan AI confidence ke dalam satu matrix keputusan, dilengkapi automation guardrail dan role-based permission — mengurangi volume review manual tanpa mengorbankan kepatuhan dan audit trail.',
    solution: [
      'Risk Score Structure — skala 0-100 dari 6 sumber data, tersegmentasi Low/Medium/High Risk',
      'Confidence Threshold — skala 0-100%, terklasifikasi Low/Moderate/High Confidence',
      'Business Interpretation Matrix — 4 kuadran aksi dari kombinasi risk × confidence',
      'Automation Rules — auto-approve/auto-reject dengan guardrail eksplisit',
      'Manual Review & Action Rules — 4 opsi aksi analyst + override wajib justifikasi tertulis',
      'Role Permission Matrix — 4 role dengan batasan can/cannot berbeda',
      'Decision Tree 5-Branch — mencakup skenario edge case',
      'Information Architecture lengkap 5 level dari Dashboard sampai Post Decision'
    ],
    validation:
      'Setiap branch pada decision tree distress-test dengan skenario edge case untuk memastikan tidak ada celah logika yang membuat sistem mengambil keputusan otomatis di area abu-abu. Validasi langsung dengan risk analyst direncanakan pada tahap berikutnya.',
    outcome:
      'Sistem logika keputusan — risk segmentation, confidence threshold, automation guardrail, role permission matrix, decision tree, dan information architecture — sudah dirancang lengkap dan saling konsisten satu sama lain. Implementasi visual dashboard saat ini sedang berjalan bertahap, dengan fondasi logic yang sudah solid sebagai dasar pengembangan.',
    tools: ['Figma', 'Notion'],
    liveDemoAvailable: false,
    statusNote: 'UI dashboard sedang dalam pengembangan.'
  }
};
