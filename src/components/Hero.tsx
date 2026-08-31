import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onSelectProject?: (type: 'fazch' | 'fintech') => void;
  onContactClick: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
};

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Animasi foto menjauh (zoom out) saat scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.20, 1.35]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      ref={targetRef}
      id="hero"
      className="relative min-h-[100vh] pt-24 sm:pt-28 lg:pt-12 pb-8 sm:pb-32 lg:pb-10 bg-black text-white flex flex-col justify-end gap-10 sm:gap-14 lg:gap-16 overflow-hidden rounded-b-[48px] sm:rounded-b-[56px] lg:rounded-b-[64px]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-near-black/60 via-black/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================= */}
      {/* VISUAL PROTAGONIST: FULL BLEED DI MOBILE & TABLET (< lg)  */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full h-full flex items-end justify-center">
          
          <motion.img 
             initial={{ opacity: 0, scale: 1.05 }}
             animate={{ opacity: 1, scale: 1 }}
             style={{
               scale: imageScale,
               opacity: imageOpacity,
               y: imageY,
               maskImage: 'linear-gradient(to bottom, black 10%, black 35%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, black 10%, black 35%, transparent 100%)'
             }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             src="/Gambar-pradea.jpg" 
             alt="Pradea — UI/UX & Product Designer"
             referrerPolicy="no-referrer"
             /* KUNCI UTAMA: w-full h-full object-cover dari HP sampai Tablet (< lg:). Baru di Desktop (lg:) pakai h-[98%] object-contain */
             className="w-full h-full lg:w-auto lg:h-[98%] object-cover lg:object-contain object-top sm:object-center lg:object-bottom contrast-110 brightness-90 lg:brightness-90 transform transition-all duration-300"
          />

          {/* OVERLAY GRADIENT HITAM: Memastikan teks di Tablet & Mobile selalu 100% terbaca jelas */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:hidden pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:hidden pointer-events-none" />

        </div>
      </div>

      {/* ========================================================= */}
      {/* UPPER SECTION: HEADLINE RAKSASA (KIRI) + TAGLINE (KANAN) */}
      {/* ========================================================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-9 lg:gap-12 items-end pt-2 sm:pt-0">
          
          {/* LEFT SIDE */}
          <div className="md:col-span-7 lg:col-span-7 lg:pb-16">
            <div className="space-y-4 sm:space-y-8 lg:space-y-4 text-left">
              
              <motion.div variants={itemVariants} className="inline-block">
                <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-near-black/90 backdrop-blur-md border border-line-dark text-xs font-semibold text-white tracking-tight shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  <span>Available for Work</span>
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1] drop-shadow-md"
              >
                Brand &<br />
                UI/UX<br />
                Designer
              </motion.h1>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-5 lg:col-span-5 md:flex md:flex-col md:items-end lg:pb-16">
            <div className="max-w-xs sm:max-w-sm text-left">
              
              <motion.p variants={itemVariants} className="font-display text-lg sm:text-2xl font-bold text-white leading-snug mb-4 sm:mb-5">
                Fast Process, Thoughtful Results.
              </motion.p>

              <motion.p variants={itemVariants} className="text-sm sm:text-base lg:text-base text-muted-soft font-normal leading-relaxed">
                Hi, I'm Adam Teja D — a product designer who pairs clear UX process with AI-assisted workflows to turn research into real, usable products.
              </motion.p>

              <motion.div variants={itemVariants} className="mt-6 sm:mt-8 lg:mt-8 flex justify-start">
                
                <a
                  href="#work"
                  id="hero-btn-portfolio"
                  className="relative inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.15)] group overflow-hidden border"
                >
                  {/* LAYER BACKGROUND ORANGE MELEBAR */}
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-accent rounded-full transition-all duration-500 ease-out group-hover:w-[120%] group-hover:h-[300%] group-hover:left-1/2 group-hover:-translate-x-1/2 z-0 pointer-events-none" />

                  {/* LINGKARAN IKON */}
                  <span className="relative z-10 w-7 h-7 rounded-full bg-accent group-hover:bg-white text-white group-hover:text-accent flex items-center justify-center font-bold transition-colors duration-300 shadow-sm shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>

                  {/* TEKS */}
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Lihat portofolio
                  </span>
                </a>

              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* LOWER SECTION: STATS ROW #01-#04 */}
      {/* ========================================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 inset-x-0 bottom-8"
      >
        <div className="w-full pt-6 sm:pt-6 lg:pt-12 grid grid-cols-2 sm:flex sm:flex-row sm:justify-between gap-y-6 gap-x-4">
          
          <div>
            <span className="font-display text-accent font-bold text-2xl">7+ Tahun</span>
            <p className="text-white font-semibold text-sm sm:text-base mt-1">Pengalaman</p>
          </div>

          <div>
            <span className="font-display text-accent font-bold text-2xl">2+ Tahun</span>
            <p className="text-white font-semibold text-sm sm:text-base mt-1">Fokus UI/UX & Product</p>
          </div>

          <div>
            <span className="font-display text-accent font-bold text-2xl">Full-Stack</span>
            <p className="text-white font-semibold text-sm sm:text-base mt-1">Vibe Coder</p>
          </div>

          <div className="sm:text-right">
            <span className="font-display text-accent font-bold text-2xl">AI Assisted</span>
            <p className="text-white font-semibold text-sm sm:text-base mt-1">Workflow</p>
          </div>

        </div>
      </motion.div>

    </section>
  );
};