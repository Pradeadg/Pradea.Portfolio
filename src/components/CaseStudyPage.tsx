import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { CASE_STUDIES_DATA } from '../data/caseStudyContent';
import { AnimatedPillContent } from './AnimatedPillContent';
import { SiteFooter } from './SiteFooter';

interface CaseStudyPageProps {
  project: Project;
  onBack: () => void;
  onSelectProject?: (project: Project) => void;
  onContactClick?: () => void;
  onOpenCv?: () => void;
}

export const LegacyCaseStudyPage: React.FC<CaseStudyPageProps> = ({ 
  project, 
  onBack, 
  onSelectProject,
  onContactClick,
  onOpenCv
}) => {
  const structuredData = CASE_STUDIES_DATA[project.id] || {
    id: project.id,
    headerBadge: {
      text: project.modalBadge || `PROJECT ${project.number}`,
      variant: project.statusBadge?.variant === 'ongoing' ? 'amber' : 'live'
    },
    title: project.title,
    subtext: project.modalSubtext || project.category,
    challenge: project.caseStudyDetails?.problem || project.description,
    whatWeLearned: project.highlights || [],
    opportunity: project.description,
    solution: project.designProcess?.map(p => `${p.title}: ${p.description}`) || [],
    validation: 'Divalidasi lewat pengujian internal sebelum deployment.',
    outcome: project.description,
    tools: project.tags,
    liveDemoAvailable: Boolean(project.liveDemoAvailable && project.liveUrl),
    liveUrl: project.liveUrl,
    statusNote: project.unavailableNote,
    customLiveButtonLabel: 'Lihat Demo Live'
  };

  // Scroll to top whenever project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  const isFazch = project.id === 'fazch';
  const isAnvieo = project.id === 'anvieo';
  const isCreditRisk = project.id === 'credit-risk';

  // Get other 2 projects for the "More Projects" section
  const otherProjects = PROJECTS.filter(p => p.id !== project.id).slice(0, 2);

  // Cover and gallery assets mapping
  const coverImage = project.coverImage || (
    isFazch ? '/public/Fazch-E-Commerce.png' : isCreditRisk ? '/finrisk-cover.jpg' : '/anvieo-cover.jpg'
  );

  return (
    <div className="min-h-screen bg-gray-bg text-ink font-sans antialiased selection:bg-accent selection:text-white">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (FULL-WIDTH IMAGE COVER + OVERLAY + METADATA) */}
      {/* ============================================================ */}
      <header className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-black text-white flex flex-col justify-between overflow-hidden">
        
        {/* Background Project Cover Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={coverImage} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
          />
          {/* Dark gradient overlay: deep at bottom and top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Top Floating Action Bar */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 flex items-center justify-between">
          
          {/* Top Left: Back Circle Button & Year / Project Sequence */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              aria-label="Kembali ke Portfolio"
              title="Kembali ke Portfolio"
              className="hero-button-motion w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-cta group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <span className="font-mono text-xs sm:text-sm font-bold text-white/90 tracking-widest uppercase pl-1">
              2026 // {project.number}
            </span>
          </div>

          {/* Top Right: Empty Spacer */}
          <div />

        </div>

        {/* Hero Bottom: Gigantic Title & Polished Meta Row */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 space-y-8 sm:space-y-10">
          
          {/* Main Massive Title */}
          <div className="space-y-5 max-w-5xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[1.08] drop-shadow-lg">
              {structuredData.title}
            </h1>
            <p className="text-base sm:text-xl text-muted-soft font-normal leading-relaxed max-w-3xl">
              {structuredData.subtext}
            </p>

            {/* Live Demo CTA Button (52px height) positioned right under the title & tag */}
            {structuredData.liveDemoAvailable && structuredData.liveUrl && (
              <div className="pt-2">
                <a
                  href={structuredData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-pill bg-accent py-2 pl-2 pr-6 text-sm font-bold text-white shadow-cta hover:bg-accent-hover group"
                >
                  <AnimatedPillContent label={structuredData.customLiveButtonLabel || 'Lihat Demo Live'} icon={ArrowUpRight} />
                </a>
              </div>
            )}
          </div>

          {/* Clean 3-Column Metadata Row (Plain text with vertical dividers, NO CARDS) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/20 text-left">
            
            {/* Meta Col 1: Peran */}
            <div className="sm:pr-6 sm:border-r sm:border-white/15 space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-soft block font-semibold">
                Peran
              </span>
              <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                {project.role}
              </p>
            </div>

            {/* Meta Col 2: Tools */}
            <div className="sm:px-6 sm:border-r sm:border-white/15 space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-soft block font-semibold">
                Tools
              </span>
              <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                {structuredData.tools.join(', ')}
              </p>
            </div>

            {/* Meta Col 3: Status / Durasi */}
            <div className="sm:pl-6 space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-soft block font-semibold">
                Status
              </span>
              <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                {project.duration || (structuredData.liveDemoAvailable ? 'Live & Berjalan' : 'Dalam Pengembangan')}
              </p>
            </div>

          </div>

        </div>

      </header>

      {/* ============================================================ */}
      {/* 2. EDITORIAL NARRATIVE SECTIONS (ASYMMETRICAL 2-COLUMN) */}
      {/* ============================================================ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-24 sm:space-y-32">
        
        {/* SECTION 2.1: CHALLENGE */}
        <section id="challenge" className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column (~25%) */}
          <div className="md:col-span-3 space-y-2">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block">
              CHALLENGE
            </span>
          </div>

          {/* Right Column (~75%) */}
          <div className="md:col-span-9 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-snug">
              Tantangan & Titik Awal Masalah
            </h2>
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
              {structuredData.challenge}
            </p>
          </div>
        </section>

        {/* SECTION 2.2: WHAT WE LEARNED */}
        <section id="what-we-learned" className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column */}
          <div className="md:col-span-3 space-y-2">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block">
              WHAT WE LEARNED
            </span>
          </div>

          {/* Right Column */}
          <div className="md:col-span-9 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-snug">
              {isAnvieo ? 'Dua Studi Validasi Nyata di Lapangan' : 'Insight & Pembelajaran Utama'}
            </h2>

            {isAnvieo ? (
              <div className="space-y-8">
                <div className="space-y-6">
                  {/* Case 1: GT Wash */}
                  <div className="space-y-2 pb-6 border-b border-line">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                        Studi 01 // Model SaaS
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink">
                      GT Wash Indonesia
                    </h3>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      Pelopor shampoo touchless dengan jaringan kemitraan nasional. Monitoring operasional sebelumnya dilakukan manual 4+ jam per hari, repeat order sering terlewat, dan standar compliance tidak terpantau.
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-success pt-1">
                      → Hasil: Mengonfirmasi kebutuhan nyata terhadap otomatisasi sistem Anvieo.
                    </p>
                  </div>

                  {/* Case 2: PT Pixel Perdana Jaya */}
                  <div className="space-y-2 pb-6 border-b border-line">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                        Studi 02 // Model Managed Service
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink">
                      PT Pixel Perdana Jaya
                    </h3>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      Distributor elektronik nasional dengan 8 cabang dan 30+ brand global. Stok tersebar di Google Sheet per cabang, service management di Excel terpisah, dan ratusan percakapan WhatsApp terjadi setiap hari tanpa sentralisasi.
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-success pt-1">
                      → Hasil: Menyatakan minat konkret sebagai klien perdana Managed Service.
                    </p>
                  </div>
                </div>

                {/* Minimalist Italic Quote */}
                <blockquote className="pt-2 pl-4 border-l-2 border-accent text-base sm:text-lg italic text-muted font-medium leading-relaxed">
                  "Ini bukan orang malas. Ini orang yang kerja keras — tapi tanpa sistem."
                </blockquote>
              </div>
            ) : (
              <div className="space-y-4">
                {structuredData.whatWeLearned.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-4 border-b border-line">
                    <span className="font-mono text-xs font-bold text-accent shrink-0 pt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/* INTERMEDIATE FULL-WIDTH IMAGE 1 */}
        {/* ============================================================ */}
        <div className="w-full rounded-card-lg overflow-hidden bg-gray-bg">
          <img 
           src={isFazch ? '/fazch-pdp.png' : isAnvieo ? '/anvieo-garda.jpg' : '/credit-risk-diagram.jpg'} 
           alt="Showcase Visual Preview"
           referrerPolicy="no-referrer"
           className="w-full h-auto object-contain object-center"
          />
        </div>

        {/* SECTION 2.3: OPPORTUNITY */}
        <section id="opportunity" className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column */}
          <div className="md:col-span-3 space-y-2">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block">
              OPPORTUNITY
            </span>
          </div>

          {/* Right Column */}
          <div className="md:col-span-9 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-snug">
              Peluang & Pendekatan Strategis
            </h2>
            <p className="text-lg sm:text-xl text-ink font-medium leading-relaxed">
              "{structuredData.opportunity}"
            </p>
          </div>
        </section>

        {/* SECTION 2.4: SOLUTION & DESIGN FOUNDATION */}
        <section id="solution" className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column */}
          <div className="md:col-span-3 space-y-2">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block">
              SOLUTION
            </span>
          </div>

          {/* Right Column */}
          <div className="md:col-span-9 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-snug">
                Arsitektur Solusi & Eksekusi Desain
              </h2>
              
              {/* Solution List */}
              <div className="space-y-3 pt-2">
                {structuredData.solution.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <span className="text-accent text-sm font-bold mt-0.5">•</span>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ============================================================ */}
            {/* 3. DESIGN FOUNDATION IN SOLUTION FLOW (NO WRAPPER CARDS) */}
            {/* ============================================================ */}
            {isFazch && (
              <div className="pt-8 border-t border-line space-y-8">
                <h3 className="text-lg sm:text-xl font-bold text-ink">
                  Design Foundation
                </h3>

                {/* Typography row */}
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-soft block font-semibold">
                    Tipografi
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-black text-ink font-sans">Urbanist</span>
                        <span className="text-3xl font-black text-muted-soft">Aa</span>
                      </div>
                      <p className="text-xs text-muted">Heading & Display typography — geometric sans dengan presisi tajam.</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-medium text-ink font-sans">DM Sans</span>
                        <span className="text-3xl font-normal text-muted-soft">Aa</span>
                      </div>
                      <p className="text-xs text-muted">Body copy & Form labels — kenyamanan membaca teks panjang dan checkout.</p>
                    </div>
                  </div>
                </div>

                {/* Color Swatches row */}
                <div className="space-y-4 pt-4 border-t border-line">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-soft block font-semibold">
                    Palet Warna
                  </span>
                  <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                    <div className="space-y-1.5 text-center">
                      <div className="w-10 h-10 rounded-full bg-white border border-[#D5D4CC] shadow-sm mx-auto" />
                      <div className="text-xs font-bold text-ink">Pure White</div>
                      <div className="text-[11px] font-mono text-muted-soft">#FFFFFF</div>
                    </div>

                    <div className="space-y-1.5 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#1F1F1F] shadow-sm mx-auto" />
                      <div className="text-xs font-bold text-ink">Deep Charcoal</div>
                      <div className="text-[11px] font-mono text-muted-soft">#1F1F1F</div>
                    </div>

                    <div className="space-y-1.5 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#8E8E8E] shadow-sm mx-auto" />
                      <div className="text-xs font-bold text-ink">Muted Gray</div>
                      <div className="text-[11px] font-mono text-muted-soft">#8E8E8E</div>
                    </div>

                    <div className="space-y-1.5 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#CACACA] shadow-sm mx-auto" />
                      <div className="text-xs font-bold text-ink">Border Silver</div>
                      <div className="text-[11px] font-mono text-muted-soft">#CACACA</div>
                    </div>

                    <div className="space-y-1.5 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#FF3B30] shadow-sm mx-auto" />
                      <div className="text-xs font-bold text-ink">Accent Red</div>
                      <div className="text-[11px] font-mono text-muted-soft">#FF3B30</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Credit Risk Dashboard Logic Sub-sections (Plain Narrative Format) */}
            {isCreditRisk && (
              <div className="pt-8 border-t border-line space-y-12">
                <h3 className="text-xl sm:text-2xl font-bold text-ink">
                  Spesifikasi Logika Sistem Keputusan
                </h3>

                {/* 1. Risk Score Structure */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-ink">
                    1. Struktur Skor Risiko (0 – 100)
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Skor risiko dikalkulasi secara agregat dari 6 sumber data input: <span className="font-semibold text-ink">financial metrics, behavioral signals, vendor history compliance, fraud indicators, document consistency, dan external data validation</span>.
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted pl-4 list-disc">
                    <li><strong className="text-success">Low Risk (0–39):</strong> Portofolio stabil, risiko default rendah, memenuhi syarat auto-approval.</li>
                    <li><strong className="text-warning">Medium Risk (40–69):</strong> Memerlukan tinjauan manual dan konfirmasi data pendukung.</li>
                    <li><strong className="text-danger">High Risk (70–100):</strong> Indikasi risiko tinggi atau sinyal fraud anomaly.</li>
                  </ul>
                </div>

                {/* 2. Confidence Threshold */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-ink">
                    2. Batasan Tingkat Kepercayaan AI (Confidence Threshold)
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Sistem memisahkan evaluasi risiko dari kepastian model AI untuk mencegah keputusan buta di area data ambigu.
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted pl-4 list-disc">
                    <li><strong className="text-danger">Low Confidence (&lt;60%):</strong> Data tidak konklusif, wajib investigasi mendalam oleh analyst.</li>
                    <li><strong className="text-warning">Moderate Confidence (60–84%):</strong> Perlu verifikasi berkas pendukung.</li>
                    <li><strong className="text-success">High Confidence (≥85%):</strong> Rekomendasi model dapat dieksekusi otomatis sesuai guardrail.</li>
                  </ul>
                </div>

                {/* 3. Role Permission Matrix (Plain Table without heavy backgrounds) */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-ink">
                    3. Matriks Hak Akses & Wewenang Peran (Role Permission Matrix)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b-2 border-black text-ink font-mono uppercase tracking-wider">
                          <th className="py-2.5 pr-4 font-bold">Role</th>
                          <th className="py-2.5 px-4 font-bold">Fokus Wewenang</th>
                          <th className="py-2.5 px-4 font-bold text-success">Dapat Melakukan</th>
                          <th className="py-2.5 pl-4 font-bold text-danger">Tidak Dapat Melakukan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line text-muted">
                        <tr>
                          <td className="py-3 pr-4 font-bold text-ink">Finance Officer</td>
                          <td className="py-3 px-4">Data Intake & Input</td>
                          <td className="py-3 px-4">Lihat intake, submit transaksi</td>
                          <td className="py-3 pl-4 text-muted">Eksekusi approve/reject/override</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-bold text-ink">Risk Analyst</td>
                          <td className="py-3 px-4">Analisis Kasus & Keputusan</td>
                          <td className="py-3 px-4">Investigasi antrean, approve, reject, req data</td>
                          <td className="py-3 pl-4 text-muted">Override tanpa persetujuan manajer</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-bold text-ink">Finance Manager</td>
                          <td className="py-3 px-4">Supervisi & Secondary Approval</td>
                          <td className="py-3 px-4">Semua akses analyst, secondary 4-eyes approval</td>
                          <td className="py-3 pl-4 text-muted">Modifikasi aturan threshold sistem</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-bold text-ink">System Admin</td>
                          <td className="py-3 px-4">Konfigurasi Model & Parameter</td>
                          <td className="py-3 px-4">Konfigurasi threshold, manajemen pengguna</td>
                          <td className="py-3 pl-4 text-muted">Eksekusi transaksi harian nasabah</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4. Decision Tree & 4-Eyes Principle */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-ink">
                    4. Alur Keputusan 5-Cabang & Protokol Override
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Cabang logika memastikan tidak ada skenario yang menggantung. Bila analyst memutuskan membalikkan rekomendasi model, sistem secara otomatis mengunci keputusan hingga <span className="font-semibold text-ink">Finance Manager memberikan otorisasi sekunder (prinsip 4-eyes)</span> beserta justifikasi tertulis yang tersimpan permanen dalam audit trail.
                  </p>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ============================================================ */}
        {/* INTERMEDIATE FULL-WIDTH IMAGE 2 */}
        {/* ============================================================ */}
        <div className="w-full rounded-card-lg overflow-hidden">
          <img 
            src={isFazch ? '/fazch-cover.jpg' : isAnvieo ? '/anvieo-wizard.png' : '/finrisk-cover.jpg'} 
            alt="Architecture and Flow Visualization"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[620px] object-cover object-center"
          />
        </div>

        {/* SECTION 2.5: VALIDATION */}
        <section id="validation" className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column */}
          <div className="md:col-span-3 space-y-2">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block">
              VALIDATION
            </span>
          </div>

          {/* Right Column */}
          <div className="md:col-span-9 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-snug">
              Validasi Lapangan & Uji Kelayakan
            </h2>
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
              {structuredData.validation}
            </p>
          </div>
        </section>

        {/* SECTION 2.6: OUTCOME */}
        <section id="outcome" className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column */}
          <div className="md:col-span-3 space-y-2">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block">
              OUTCOME
            </span>
          </div>

          {/* Right Column */}
          <div className="md:col-span-9 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-snug">
              Hasil Nyata & Milestone Pencapaian
            </h2>

            {isAnvieo ? (
              <div className="space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-success mt-0.5">✓</span>
                    <span className="text-sm sm:text-base text-ink font-medium">
                      GARDA AI Engine berjalan aktif berbasis model Gemma
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-success mt-0.5">✓</span>
                    <span className="text-sm sm:text-base text-ink font-medium">
                      6 modul ERP inti (Sales, Inventori, Akuntansi, Distribusi, Real-Time Monitoring) selesai dibangun
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-success mt-0.5">✓</span>
                    <span className="text-sm sm:text-base text-ink font-medium">
                      Validasi pasar langsung dengan GT Wash Indonesia selesai
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-warning mt-0.5">→</span>
                    <span className="text-sm sm:text-base text-muted">
                      Pilot deployment GT Wash sedang berjalan aktif
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-warning mt-0.5">→</span>
                    <span className="text-sm sm:text-base text-muted">
                      Target pelanggan komersial perdana 60 hari pasca hackathon
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted pt-4 border-t border-line font-mono leading-relaxed">
                  <strong className="text-ink">Pipeline lanjutan:</strong> PT Pixel Perdana Jaya, perusahaan pupuk regional Jambi, dan jaringan kemitraan ritel Indonesia Timur.
                </p>
              </div>
            ) : (
              <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
                {structuredData.outcome}
              </p>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. GALLERY SECTION (VARIED HIGH-RESOLUTION SHOWCASE) */}
        {/* ============================================================ */}
        <section id="gallery" className="pt-16 border-t border-line space-y-10">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
              GALLERY // TAMPILAN LENGKAP
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Tampilan Lengkap & Dokumentasi Desain
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-2xl">
              Eksplorasi visual antarmuka menyeluruh dari level makro hingga detail interaksi mikro.
            </p>
          </div>

          {/* PROJECT-SPECIFIC GALLERY LAYOUT */}
          {isFazch && (
            <div className="space-y-6">
              {/* Full Width Image: Home Page */}
              <div className="w-full rounded-card-lg overflow-hidden">
                <img 
                  src="/fazch-cover2.png" 
                  alt="FAZCH Home Page Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* 2-Column Grid: PDP & Checkout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full rounded-card-lg overflow-hidden">
                  <img 
                    src="/fazch-pdp2.jpg" 
                    alt="FAZCH Product Detail Page"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full rounded-card-lg overflow-hidden">
                  <img 
                    src="/fazch-cover1.jpg" 
                    alt="FAZCH Mobile & Responsive Layout"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {isAnvieo && (
            <div className="space-y-6">
              {/* Full Width Image: Hero Overview */}
              <div className="w-full rounded-card-lg overflow-hidden">
                <img 
                  src="/anvieo-cover.jpg" 
                  alt="Anvieo Landing Page Hero"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* 2-Column Grid: GARDA AI + 4-Step Wizard */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full rounded-card-lg overflow-hidden shadow-photo bg-black">
                  <img 
                    src="/anvieo-garda.png" 
                    alt="GARDA AI Assistant Chat Panel"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full rounded-card-lg overflow-hidden shadow-photo bg-black">
                  <img 
                    src="/anvieo-wizard2.png" 
                    alt="Anvieo 4-Step Onboarding Wizard"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {isCreditRisk && (
            <div className="space-y-6">
              {/* Full Width: Decision Diagram */}
              <div className="w-full rounded-card-lg">
                <img 
                  src="/credit-risk-diagram2.jpg" 
                  alt="Credit Risk Decision Matrix Diagram"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* 2-Column Grid: Architecture & Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full rounded-card-lg">
                  <img 
                    src="/finrisk-cover.jpg" 
                    alt="Fintech Risk Scoring Matrix"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full rounded-card-lg">
                  <img 
                    src="/credit-risk-diagram.jpg" 
                    alt="Decision Tree Branches and Guardrails"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

        </section>

      </main>

      {/* ============================================================ */}
      {/* BAGIAN 1 — BOX AJAKAN (MENGAMBANG, ROUNDED) */}
      {/* ============================================================ */}
      <section className="w-full bg-gray-bg pb-12 sm:pb-16 select-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-accent text-white rounded-card-lg p-8 sm:p-12 lg:p-14 shadow-cta flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            
            {/* Kiri: Headline & Sub-teks */}
            <div className="space-y-2.5 max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-[-0.02em] leading-tight">
                Penasaran apa lagi yang sedang saya kerjakan?
              </h2>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed">
                Ayo bangun sesuatu yang bermakna bersama
              </p>
            </div>

            {/* Kanan: Tombol CTA Pill (Background Hitam, Teks Putih, Ikon Panah Putih Lingkaran) */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={onContactClick}
                className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-pill bg-black py-2 pl-2 pr-6 text-sm font-bold text-white shadow-cta hover:bg-near-black group"
              >
                <AnimatedPillContent label="Hubungi Saya" icon={ArrowRight} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BAGIAN 2 — DAFTAR PROJECT LAIN (BACKGROUND PUTIH, SECTION TERPISAH) */}
      {/* ============================================================ */}
      <section id="more-projects" className="w-full bg-white text-ink py-16 sm:py-24 border-t border-line select-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          {/* Section Heading */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                PROJECT LAINNYA
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
              Karya Lainnya
            </h2>
          </div>

          {/* 2-Column Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {otherProjects.map((other) => {
              const otherCover = other.coverImage || (
                other.id === 'fazch' ? '/fazch-cover.jpg' : other.id === 'credit-risk' ? '/finrisk-cover.jpg' : '/anvieo-cover.jpg'
              );

              // Specific short one-line description as requested
              const customDescription = other.id === 'fazch'
                ? 'Website e-commerce fashion muslim, dari desain sampai deployment.'
                : other.id === 'credit-risk'
                ? 'Design system dan decision engine untuk tim risk fintech.'
                : 'Composite ERP & AI Platform untuk UMKM Indonesia.';

              return (
                <div 
                  key={other.id}
                  onClick={() => onSelectProject?.(other)}
                  className="group cursor-pointer space-y-5 text-left"
                >
                  {/* Clean Large Rounded Image */}
                  <div className="w-full aspect-[16/10] rounded-card-lg overflow-hidden bg-black shadow-photo border border-line">
                    <img 
                      src={otherCover} 
                      alt={other.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                    />
                  </div>

                  {/* Information below image (Dark text on white background) */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-ink group-hover:text-accent transition-colors leading-tight">
                      {other.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-muted font-normal leading-relaxed">
                      {customDescription}
                    </p>

                    <div className="pt-2">
                      <div className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-pill bg-black py-2 pl-2 pr-6 text-sm font-bold text-white shadow-cta group-hover:bg-near-black group-hover:scale-105">
                        <AnimatedPillContent label="Lihat" icon={ArrowRight} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. FOOTER */}
      {/* ============================================================ */}
      <SiteFooter onOpenCv={onOpenCv} />

    </div>
  );
};
