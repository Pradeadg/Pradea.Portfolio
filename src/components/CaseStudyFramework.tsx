import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, FlaskConical, Lightbulb, Search } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { CASE_STUDIES_DATA } from '../data/caseStudyContent';
import { AnimatedPillContent } from './AnimatedPillContent';
import { SiteFooter } from './SiteFooter';
import { useLanguage } from '../LanguageContext';

interface Props { project: Project; onBack: () => void; onSelectProject?: (project: Project) => void; onContactClick?: () => void; onOpenCv?: () => void; }
interface Narrative { overview: string; research: string[]; insight: string; validated: string[]; hypotheses: string[]; ideas: string[]; decisions: Array<{ problem: string; response: string }>; nextSteps: string[]; learning: string; }

const NARRATIVES: Record<string, Narrative> = {
  fazch: {
    overview: 'FAZCH adalah storefront independen untuk brand fashion muslim, dirancang dan dibangun end-to-end dari sistem visual hingga pembayaran.',
    research: ['Membandingkan alur belanja marketplace', 'Mengaudit trust signal toko independen', 'Memetakan kebutuhan informasi produk'],
    insight: 'Pembeli tidak hanya membutuhkan checkout yang cepat. Mereka perlu merasa aman sebelum meninggalkan kebiasaan belanja di marketplace.',
    validated: ['Alur marketplace menjadi referensi perilaku belanja', 'Informasi produk dan sinyal kepercayaan memengaruhi keraguan sebelum checkout'],
    hypotheses: ['Checkout tiga langkah dapat mengurangi beban keputusan', 'Status stok dan badge pembayaran dapat memperkuat rasa aman'],
    ideas: ['Checkout ringkas', 'Kategori Pria dan Anak', 'Status stok real-time', 'Pembayaran lokal'],
    decisions: [
      { problem: 'Pembeli ragu bertransaksi di luar marketplace.', response: 'Menampilkan trust signal dan metode pembayaran Midtrans secara eksplisit.' },
      { problem: 'Alur panjang menambah friksi.', response: 'Menyusun checkout menjadi tiga langkah yang fokus dan berurutan.' },
      { problem: 'Informasi produk mudah terlewat.', response: 'Membuat hierarki PDP yang mengutamakan detail, stok, dan aksi beli.' }
    ],
    nextSteps: ['Menguji checkout dengan pembeli nyata', 'Mengamati drop-off tiap langkah', 'Memvalidasi pemahaman informasi ukuran dan stok'],
    learning: 'Kepercayaan bukan lapisan dekoratif. Ia harus hadir di setiap keputusan, dari informasi produk sampai pembayaran.'
  },
  anvieo: {
    overview: 'Anvieo menggabungkan ERP modular dan GARDA AI untuk membantu UMKM melihat, memahami, dan menjalankan operasional dalam satu sistem.',
    research: ['Pilot partner model SaaS: GT Wash', 'Pilot partner managed service: PT Pixel Perdana Jaya', 'Pemetaan alur data lintas WhatsApp, Excel, dan cabang'],
    insight: 'Masalah utamanya bukan kurang bekerja keras, tetapi tidak adanya satu sistem yang menyatukan data dan memberi konteks untuk bertindak.',
    validated: ['Monitoring manual memakan 4+ jam per hari di GT Wash', 'Data stok dan layanan PT Pixel tersebar di banyak kanal', 'Kedua partner mengonfirmasi masalah operasional yang dipetakan'],
    hypotheses: ['Rekomendasi modul dapat mempercepat onboarding', 'Natural-language query dapat membuat data bisnis lebih mudah diakses'],
    ideas: ['ERP composable', 'GARDA Chat', 'Dynamic UI per tenant', 'Onboarding berbasis profil'],
    decisions: [
      { problem: 'Kebutuhan tiap UMKM berbeda.', response: 'Menggunakan modul composable dan dynamic UI berdasarkan modul aktif.' },
      { problem: 'Data tersedia tetapi sulit ditafsirkan.', response: 'Menyediakan GARDA Chat untuk bertanya dan menerima konteks tindakan.' },
      { problem: 'Setup ERP terasa berat.', response: 'Memecah onboarding menjadi profiling, rekomendasi modul, lalu aktivasi.' }
    ],
    nextSteps: ['Menjalankan pilot deployment', 'Menguji onboarding dengan owner dan staf operasional', 'Memvalidasi akurasi rekomendasi GARDA'],
    learning: 'AI menjadi berguna ketika ditempatkan di dalam alur kerja nyata, bukan berdiri sebagai fitur terpisah.'
  },
  'credit-risk': {
    overview: 'Sistem keputusan risiko yang menerjemahkan risk score, confidence AI, hak akses, dan audit trail menjadi alur kerja yang dapat dijelaskan.',
    research: ['Membedah faktor penyusun risk score', 'Memetakan hubungan risk dan confidence', 'Menyusun role permission serta edge case'],
    insight: 'Risk score tidak cukup untuk menentukan tindakan. Tingkat keyakinan AI dan wewenang manusia harus terlihat pada momen keputusan.',
    validated: ['Lima kontributor risiko utama telah dipetakan', 'Decision tree telah diuji terhadap skenario edge case', 'Aturan role dan override telah disusun'],
    hypotheses: ['Matrix dua sumbu mempercepat interpretasi analyst', 'Justifikasi wajib dapat menjaga akuntabilitas override'],
    ideas: ['Matrix empat kuadran', 'Confidence threshold', 'Automation guardrail', 'Decision log'],
    decisions: [
      { problem: 'Skor tunggal menyembunyikan ketidakpastian.', response: 'Memasangkan risk score dengan confidence AI dalam matrix keputusan.' },
      { problem: 'Automation berbahaya pada kasus ambigu.', response: 'Memberi guardrail dan mengalihkan area abu-abu ke manual review.' },
      { problem: 'Override sulit diaudit.', response: 'Membatasi aksi berdasarkan role dan mewajibkan alasan tertulis.' }
    ],
    nextSteps: ['Validasi langsung bersama risk analyst', 'Uji keterbacaan dalam target keputusan 30 detik', 'Lanjutkan implementasi visual dashboard'],
    learning: 'Untuk produk berisiko tinggi, desain yang baik bukan menyederhanakan logika secara berlebihan, tetapi membuat kompleksitasnya dapat dijelaskan.'
  }
};

const VISUALS: Record<string, string[]> = {
  fazch: ['/fazch-cover2.png', '/fazch-pdp.png', '/fazch-pdp2.jpg', '/fazch-cover1.jpg'],
  anvieo: ['/anvieo-cover.jpg', '/anvieo-garda.png', '/anvieo-wizard2.png', '/anvieo-garda.jpg'],
  'credit-risk': ['/finrisk-cover.jpg', '/credit-risk-diagram2.jpg', '/credit-risk-diagram.jpg', '/finrisk-cover.png']
};

const Label = ({ index, children }: { index: string; children: React.ReactNode }) => {
  const { copy } = useLanguage();
  const labels: Record<string, string> = {
    Overview: copy.caseStudy.overview, Challenge: copy.caseStudy.challenge, Research: copy.caseStudy.research,
    'Key Insight': copy.caseStudy.insight, Problem: copy.caseStudy.problem, Ideation: copy.caseStudy.ideation,
    'Design Decision': copy.caseStudy.decision, Solution: copy.caseStudy.solution, Outcome: copy.caseStudy.outcome,
    'Current Outcome': copy.caseStudy.currentOutcome, 'Next Step': copy.caseStudy.next,
    'Key Learning': copy.caseStudy.learning, 'More Work': copy.caseStudy.more,
  };
  const content = typeof children === 'string' ? labels[children] || children : children;
  return <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent"><span className="font-mono">{index}</span><span className="h-px w-8 bg-accent" /><span>{content}</span></div>;
};
const Visual = ({ src, alt, className = '', contain = false }: { src: string; alt: string; className?: string; contain?: boolean }) => <div className={`overflow-hidden rounded-card-lg bg-black border border-line ${className}`}><img src={src} alt={alt} referrerPolicy="no-referrer" className={`h-full w-full ${contain ? 'object-contain' : 'object-cover'}`} /></div>;

export const CaseStudyFramework: React.FC<Props> = ({ project, onBack, onSelectProject, onContactClick, onOpenCv }) => {
  const { copy } = useLanguage();
  const data = CASE_STUDIES_DATA[project.id];
  const narrative = NARRATIVES[project.id] || NARRATIVES.fazch;
  const visuals = VISUALS[project.id] || [project.coverImage || '/fazch-cover.jpg'];
  const others = PROJECTS.filter((item) => item.id !== project.id).slice(0, 2);
  const outcomeTitle = project.id === 'fazch' ? copy.caseStudy.outcome : copy.caseStudy.currentOutcome;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  return <div className="min-h-screen bg-white text-ink font-sans antialiased selection:bg-accent selection:text-white">
    <header className="relative min-h-[88svh] overflow-hidden bg-black text-white">
      <img src={project.coverImage || visuals[0]} alt={project.title} className="absolute inset-0 h-full w-full object-cover opacity-55" /><div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black" />
      <div className="relative z-10 mx-auto flex min-h-[88svh] w-full max-w-[1600px] flex-col justify-between px-6 py-8 sm:px-12 lg:px-16 lg:py-12">
        <div className="flex items-center justify-between"><button onClick={onBack} aria-label={copy.caseStudy.back} className="hero-button-motion flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md hover:bg-white hover:text-black"><ArrowLeft className="h-4 w-4" /></button><span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/70">Project {project.number} · {project.duration}</span></div>
        <div className="max-w-6xl space-y-7"><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-pill border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">{tag}</span>)}</div><h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[104px]">{project.title}</h1><p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-xl">{data?.subtext || project.description}</p>{data?.liveDemoAvailable && data.liveUrl && <a href={data.liveUrl} target="_blank" rel="noreferrer" className="hero-button-motion group relative inline-flex items-center gap-3 overflow-hidden rounded-pill bg-white py-2 pl-2 pr-6 text-sm font-bold text-black"><AnimatedPillContent label={copy.caseStudy.live} icon={ArrowUpRight} /></a>}</div>
      </div>
    </header>

    <main>
      <section data-case-study-section className="bg-gray-bg py-20 sm:py-28"><div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 sm:px-12 lg:grid-cols-12 lg:px-16"><div className="lg:col-span-5"><Label index="01">{copy.caseStudy.overview}</Label><h2 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">{copy.caseStudy.overviewTitle}</h2></div><div className="space-y-8 lg:col-span-7"><p className="font-display text-2xl font-medium leading-snug sm:text-3xl">{narrative.overview}</p><div className="grid gap-6 border-t border-line pt-7 sm:grid-cols-3">{[[copy.caseStudy.role, project.role], [copy.caseStudy.duration, project.duration], [copy.caseStudy.status, project.statusBadge?.text || 'Project']].map(([label, value]) => <div key={label}><span className="text-xs font-bold uppercase tracking-widest text-muted">{label}</span><p className="mt-2 text-sm font-semibold">{value}</p></div>)}</div></div></div></section>
      <section data-case-study-section className="bg-white py-20 sm:py-32"><div className="mx-auto w-full max-w-[1600px] space-y-14 px-6 sm:px-12 lg:px-16"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><Label index="02">Challenge</Label></div><div className="lg:col-span-8"><h2 className="text-3xl font-bold leading-tight sm:text-5xl">{data?.challenge || project.description}</h2></div></div><Visual src={visuals[0]} alt={`${project.title} overview`} className="aspect-[16/9]" /></div></section>
      <section data-case-study-section className="bg-gray-bg py-20 sm:py-32"><div className="mx-auto w-full max-w-[1600px] px-6 sm:px-12 lg:px-16"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><Label index="03">Research</Label><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Mencari pola, bukan sekadar asumsi.</h2></div><div className="grid gap-5 sm:grid-cols-3 lg:col-span-8">{narrative.research.map((item, index) => <article key={item} className="rounded-card border border-line bg-white p-6 sm:p-7"><Search className="h-5 w-5 text-accent" /><span className="mt-10 block font-mono text-xs text-muted">0{index + 1}</span><h3 className="mt-3 text-lg font-bold leading-snug">{item}</h3></article>)}</div></div></div></section>
      <section data-case-study-section className="bg-black py-20 text-white sm:py-32"><div className="mx-auto grid w-full max-w-[1600px] gap-10 px-6 sm:px-12 lg:grid-cols-12 lg:px-16"><div className="lg:col-span-4"><Label index="04">Key Insight</Label></div><blockquote className="font-display text-3xl font-semibold leading-tight sm:text-5xl lg:col-span-8 lg:text-6xl">“{narrative.insight}”</blockquote></div></section>
      <section data-case-study-section className="bg-white py-20 sm:py-32"><div className="mx-auto w-full max-w-[1600px] space-y-12 px-6 sm:px-12 lg:px-16"><div className="max-w-3xl"><Label index="05">Problem</Label><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Yang diketahui dan yang masih perlu dibuktikan.</h2></div><div className="grid gap-6 lg:grid-cols-2"><div className="rounded-card-lg bg-black p-7 text-white sm:p-10"><Check className="h-6 w-6 text-accent" /><p className="mt-8 text-xs font-bold uppercase tracking-widest text-accent">Validated findings</p><div className="mt-6 space-y-5">{narrative.validated.map((item) => <p key={item} className="border-t border-line-dark pt-5 text-base leading-relaxed text-white/75">{item}</p>)}</div></div><div className="rounded-card-lg border border-line bg-gray-bg p-7 sm:p-10"><FlaskConical className="h-6 w-6 text-accent" /><p className="mt-8 text-xs font-bold uppercase tracking-widest text-accent">Working hypotheses</p><div className="mt-6 space-y-5">{narrative.hypotheses.map((item) => <p key={item} className="border-t border-line pt-5 text-base leading-relaxed text-muted">{item}</p>)}</div></div></div></div></section>
      <section data-case-study-section className="bg-gray-bg py-20 sm:py-32"><div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 sm:px-12 lg:grid-cols-12 lg:px-16"><div className="lg:col-span-5"><Label index="06">Ideation</Label><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Membuka pilihan sebelum menetapkan arah.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">{narrative.ideas.map((idea, index) => <div key={idea} className="flex min-h-36 flex-col justify-between rounded-card border border-line bg-white p-6"><Lightbulb className="h-5 w-5 text-accent" /><div><span className="font-mono text-xs text-muted">0{index + 1}</span><h3 className="mt-2 text-xl font-bold">{idea}</h3></div></div>)}</div></div></section>
      <section data-case-study-section className="bg-white py-20 sm:py-32"><div className="mx-auto w-full max-w-[1600px] space-y-12 px-6 sm:px-12 lg:px-16"><div className="max-w-3xl"><Label index="07">Design Decision</Label><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Setiap respons desain berangkat dari masalah.</h2></div><div className="space-y-4">{narrative.decisions.map((decision, index) => <article key={decision.problem} className="grid gap-6 rounded-card border border-line bg-gray-bg p-6 sm:p-8 lg:grid-cols-12"><div className="lg:col-span-5"><span className="text-xs font-bold uppercase tracking-widest text-muted">Problem 0{index + 1}</span><p className="mt-3 text-lg font-semibold">{decision.problem}</p></div><div className="lg:col-span-1 lg:flex lg:justify-center"><ArrowRight className="h-5 w-5 rotate-90 text-accent lg:rotate-0" /></div><div className="lg:col-span-6"><span className="text-xs font-bold uppercase tracking-widest text-accent">Design response</span><p className="mt-3 text-lg font-semibold">{decision.response}</p></div></article>)}</div></div></section>
      <section data-case-study-section className="bg-black py-20 text-white sm:py-32"><div className="mx-auto w-full max-w-[1600px] space-y-12 px-6 sm:px-12 lg:px-16"><div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-4"><Label index="08">Solution</Label></div><div className="lg:col-span-8"><h2 className="text-4xl font-bold leading-tight sm:text-6xl">Solusi, ditunjukkan dalam skala penuh.</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{data?.solution.map((item) => <p key={item} className="border-t border-line-dark pt-4 text-sm leading-relaxed text-white/65">{item}</p>)}</div></div></div><Visual src={visuals[1] || visuals[0]} alt={`${project.title} main solution`} className="aspect-[16/10] border-line-dark" contain /><div className="grid gap-6 md:grid-cols-2"><Visual src={visuals[2] || visuals[0]} alt={`${project.title} solution detail one`} className="aspect-[4/3] border-line-dark" contain /><Visual src={visuals[3] || visuals[0]} alt={`${project.title} solution detail two`} className="aspect-[4/3] border-line-dark" contain /></div></div></section>
      <section data-case-study-section className="bg-white py-20 sm:py-32"><div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 sm:px-12 lg:grid-cols-12 lg:px-16"><div className="lg:col-span-4"><Label index="09">{outcomeTitle}</Label><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Apa yang sudah nyata hari ini.</h2></div><div className="rounded-card-lg bg-accent p-8 text-white sm:p-12 lg:col-span-8"><p className="font-display text-2xl font-semibold leading-snug sm:text-4xl">{data?.outcome || project.description}</p>{data?.validation && <p className="mt-8 border-t border-white/25 pt-6 text-sm leading-relaxed text-white/80">{data.validation}</p>}</div></div></section>
      <section data-case-study-section className="bg-gray-bg py-20 sm:py-32"><div className="mx-auto w-full max-w-[1600px] px-6 sm:px-12 lg:px-16"><div className="grid gap-12 lg:grid-cols-2"><div><Label index="10">Next Step</Label><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Yang perlu diuji berikutnya.</h2></div><div className="space-y-3">{narrative.nextSteps.map((step, index) => <div key={step} className="flex gap-5 rounded-card border border-line bg-white p-6"><span className="font-mono text-sm font-bold text-accent">0{index + 1}</span><p className="font-semibold">{step}</p></div>)}</div></div></div></section>
      <section data-case-study-section className="bg-white py-20 sm:py-32"><div className="mx-auto grid w-full max-w-[1600px] gap-10 px-6 sm:px-12 lg:grid-cols-12 lg:px-16"><div className="lg:col-span-4"><Label index="11">Key Learning</Label></div><p className="font-display text-3xl font-semibold leading-tight sm:text-5xl lg:col-span-8">{narrative.learning}</p></div></section>
      <section data-case-study-section id="more-work" className="bg-black py-20 text-white sm:py-28"><div className="mx-auto w-full max-w-[1600px] space-y-12 px-6 sm:px-12 lg:px-16"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><Label index="12">More Work</Label><h2 className="mt-5 text-4xl font-bold sm:text-6xl">Lanjut ke karya berikutnya.</h2></div>{onContactClick && <button onClick={onContactClick} className="hero-button-motion group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-pill bg-white py-2 pl-2 pr-6 text-sm font-bold text-black"><AnimatedPillContent label="Hubungi Saya" icon={ArrowUpRight} /></button>}</div><div className="grid gap-6 md:grid-cols-2">{others.map((item) => <button key={item.id} onClick={() => onSelectProject?.(item)} className="group text-left"><Visual src={item.coverImage || '/fazch-cover.jpg'} alt={item.title} className="aspect-[16/10] border-line-dark" /><div className="mt-5 flex items-center justify-between gap-4"><div><span className="text-xs font-bold text-accent">{item.cardTag}</span><h3 className="mt-1 text-2xl font-bold">{item.title}</h3></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span></div></button>)}</div></div></section>
    </main><SiteFooter onOpenCv={onOpenCv} />
  </div>;
};
