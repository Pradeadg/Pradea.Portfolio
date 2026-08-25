import React from 'react';

interface ProcessSectionProps {
  onContactClick?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onContactClick }) => {
  const steps = [
    {
      number: '01',
      title: '01 — Riset',
      description: 'Memahami masalah dan target pengguna lewat riset, dipercepat dengan sintesis AI untuk pemetaan user persona.',
      theme: 'light' as const,
      icon: (
        <svg className="w-4 h-4 text-[#FF3B30]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5L14.6 9.4L21.5 12L14.6 14.6L12 21.5L9.4 14.6L2.5 12L9.4 9.4L12 2.5Z" />
        </svg>
      )
    },
    {
      number: '02',
      title: '02 — Desain',
      description: 'Menyusun wireframe dan design system yang seimbang antara estetika dan usability.',
      theme: 'dark' as const,
      icon: (
        <svg className="w-4 h-4 text-[#FF3B30]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      number: '03',
      title: '03 — Bangun',
      description: 'Vibe-coding dari desain jadi produk jalan dengan Next.js dan Tailwind.',
      theme: 'light' as const,
      icon: (
        <svg className="w-4 h-4 text-[#FF3B30]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: '04',
      title: '04 — Rilis',
      description: 'Deploy dan iterasi berdasarkan feedback nyata dari pengguna.',
      theme: 'dark' as const,
      icon: (
        <svg className="w-4 h-4 text-[#FF3B30]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="12" y="3" width="12.7" height="12.7" rx="1.5" transform="rotate(45 12 3)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    }
  ];

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="process" 
      className="py-20 sm:py-28 bg-[#FFFFFF] text-[#111111] border-b border-[#EAEAE8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Title on Left, Contact Pill Button on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-start gap-6 mb-12 sm:mb-16">
          <div className="space-y-2.5">
            {/* Badge Process */}
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#7A7A76] tracking-wider uppercase">
              <span className="text-[#FF3B30] text-sm leading-none">PROCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-[#0A0A0A] leading-tight">
              Proses kerja dari riset sampai produk<br className="hidden sm:block" /> siap dipakai.
            </h2>
          </div>

          <div className="shrink-0">
            <button
              onClick={handleContact}
              className="px-7 py-3 rounded-full bg-[#0A0A0A] text-white text-xs sm:text-sm font-bold hover:bg-[#222222] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              Hubungi saya
            </button>
          </div>
        </div>

        {/* 4 Cards Grid - Matches screenshot layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((item) => {
            const isDark = item.theme === 'dark';
            return (
              <div
                key={item.number}
                id={`process-card-${item.number}`}
                className={`group min-h-[250px] p-6 sm:p-7 rounded-[22px] flex flex-col justify-start transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-xl border cursor-default ${
                  isDark
                    ? 'bg-[#0A0A0A] text-white border-[#1F1F1F] hover:border-[#383838] hover:bg-[#121212]'
                    : 'bg-[#F2F0EB] text-[#0A0A0A] border-[#E8E6E0] hover:border-[#D5D3CC] hover:bg-[#F7F5F0]'
                }`}
              >
                {/* Top Icon Box with Red Stroke */}
                <div>
                  <div className="w-10 h-10 rounded-xl border border-[#FF3B30]/70 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                </div>

                {/* Content: Title & Description */}
                <div className="space-y-2 pt-8">
                  <h3 className={`text-base sm:text-lg font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#0A0A0A]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-[13px] leading-relaxed ${isDark ? 'text-[#9E9E9A]' : 'text-[#5C5C5A]'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
