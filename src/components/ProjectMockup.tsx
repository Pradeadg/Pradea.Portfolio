import React from 'react';
import { ShoppingBag, ArrowUpRight, ShieldAlert, Cpu, CheckCircle2, TrendingUp, Sparkles, CreditCard, ChevronRight, Activity } from 'lucide-react';

interface ProjectMockupProps {
  type: 'fazch' | 'fintech' | 'anvieo';
  className?: string;
  isCompact?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, className = '', isCompact = false }) => {
  if (type === 'fazch') {
    return (
      <div className={`w-full bg-[#181818] border border-[#2E2E2E] rounded-xl overflow-hidden font-sans text-white ${className}`}>
        {/* Browser Top Bar */}
        <div className="bg-[#111111] px-4 py-2.5 border-b border-[#262626] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
          </div>
          <div className="bg-[#1F1F1F] px-3 py-0.5 rounded-full text-[11px] font-mono text-[#8A8A85] flex items-center gap-1.5 border border-[#2A2A2A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
            fazch.com/collection/raya-2026
          </div>
          <div className="text-[10px] text-[#8A8A85] font-mono">LIVE STORE</div>
        </div>

        {/* E-Commerce UI Representation */}
        <div className="p-4 sm:p-5 bg-[#0F0F0F] space-y-4">
          <div className="flex items-center justify-between border-b border-[#222222] pb-3">
            <div className="font-extrabold text-sm tracking-tight text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-[#FF3B30] text-white flex items-center justify-center text-xs font-bold">F</span>
              FAZCH STUDIO
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] bg-[#1C1C1C] text-[#D1D1D0] px-2.5 py-1 rounded-full border border-[#2B2B2B]">
                Midtrans Verified
              </span>
              <span className="p-1.5 rounded-full bg-[#222] text-white">
                <ShoppingBag className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Product Card 1 */}
            <div className="bg-[#161616] border border-[#262626] rounded-lg p-3 space-y-2">
              <div className="w-full aspect-[4/3] bg-[#222222] rounded flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#252525] flex items-center justify-center text-[#666666] font-mono text-xs">
                  [ RAYA ABAYA 01 ]
                </div>
                <span className="absolute top-2 right-2 bg-[#FF3B30] text-white text-[9px] font-mono px-1.5 py-0.5 rounded font-bold">
                  NEW
                </span>
              </div>
              <div className="flex justify-between items-start pt-1">
                <div>
                  <div className="text-xs font-semibold text-white">Noor Silk Abaya</div>
                  <div className="text-[11px] font-mono text-[#8A8A85]">IDR 489.000</div>
                </div>
                <span className="text-[10px] text-[#22C55E] bg-[#16291C] px-1.5 py-0.5 rounded font-mono">98 In Stock</span>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-[#161616] border border-[#262626] rounded-lg p-3 space-y-2">
              <div className="w-full aspect-[4/3] bg-[#222222] rounded flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#252525] flex items-center justify-center text-[#666666] font-mono text-xs">
                  [ LINEN TUNIC 02 ]
                </div>
                <span className="absolute top-2 right-2 bg-[#222222] text-[#8A8A85] text-[9px] font-mono px-1.5 py-0.5 rounded">
                  RESTOCK
                </span>
              </div>
              <div className="flex justify-between items-start pt-1">
                <div>
                  <div className="text-xs font-semibold text-white">Zahra Linen Set</div>
                  <div className="text-[11px] font-mono text-[#8A8A85]">IDR 399.000</div>
                </div>
                <span className="text-[10px] text-[#22C55E] bg-[#16291C] px-1.5 py-0.5 rounded font-mono">142 In Stock</span>
              </div>
            </div>

            {/* Checkout & Midtrans flow snapshot */}
            <div className="bg-[#161616] border border-[#262626] rounded-lg p-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#8A8A85] uppercase tracking-wider flex items-center gap-1">
                  <CreditCard className="w-3 h-3 text-[#FF3B30]" /> Checkout Flow
                </div>
                <div className="bg-[#1F1F1F] p-2 rounded text-[11px] space-y-1">
                  <div className="flex justify-between text-[#CCCCCC]">
                    <span>Total (2 items)</span>
                    <span className="font-mono font-bold text-white">IDR 888.000</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#8A8A85]">
                    <span>Gateway</span>
                    <span className="text-[#FF3B30] font-mono">Midtrans Snap</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 bg-[#FF3B30] text-white py-1.5 px-2 rounded text-center text-xs font-bold flex items-center justify-center gap-1">
                <span>Instant QRIS / VA</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'fintech') {
    return (
      <div className={`w-full bg-[#141414] border border-[#2E2E2E] rounded-xl overflow-hidden font-sans text-white ${className}`}>
        {/* Top Control Bar */}
        <div className="bg-[#0D0D0D] px-4 py-2.5 border-b border-[#242424] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
            <span className="ml-2 text-xs font-semibold text-white flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#FF3B30]" />
              FINRISK MATRIX V2.4
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono bg-[#2A1010] text-[#FF3B30] px-2 py-0.5 rounded border border-[#441818]">
              LIVE AUDIT TRAIL
            </span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-4 sm:p-5 bg-[#0F0F0F] space-y-3">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="bg-[#181818] border border-[#292929] p-2.5 rounded-lg">
              <div className="text-[10px] font-mono text-[#8A8A85]">RISK SCORE AVG</div>
              <div className="text-base font-extrabold text-white font-mono mt-0.5">742 / 850</div>
              <div className="text-[9px] text-[#22C55E] flex items-center gap-0.5 font-mono">
                <TrendingUp className="w-2.5 h-2.5" /> Low Default Prob
              </div>
            </div>
            <div className="bg-[#181818] border border-[#292929] p-2.5 rounded-lg">
              <div className="text-[10px] font-mono text-[#8A8A85]">FLAGGED FRAUD</div>
              <div className="text-base font-extrabold text-[#FF3B30] font-mono mt-0.5">14 Cases</div>
              <div className="text-[9px] text-[#8A8A85] font-mono">Auto Blocked</div>
            </div>
            <div className="bg-[#181818] border border-[#292929] p-2.5 rounded-lg">
              <div className="text-[10px] font-mono text-[#8A8A85]">DECISION SPEED</div>
              <div className="text-base font-extrabold text-white font-mono mt-0.5">1.4s</div>
              <div className="text-[9px] text-[#22C55E] font-mono">-65% vs Manual</div>
            </div>
            <div className="bg-[#181818] border border-[#292929] p-2.5 rounded-lg">
              <div className="text-[10px] font-mono text-[#8A8A85]">APPROVAL RATE</div>
              <div className="text-base font-extrabold text-white font-mono mt-0.5">88.6%</div>
              <div className="text-[9px] text-[#8A8A85] font-mono">OJK Compliant</div>
            </div>
          </div>

          {/* Decision Queue Table Mock */}
          <div className="bg-[#161616] border border-[#262626] rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-[#E0E0E0] border-b border-[#262626] pb-2">
              <span>Risk Analyst Decision Stream</span>
              <span className="text-[10px] font-mono text-[#8A8A85]">Figma Component Library</span>
            </div>
            <div className="space-y-1.5 text-xs font-mono">
              <div className="bg-[#1F1F1F] p-2 rounded flex items-center justify-between border border-[#2B2B2B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  <span className="text-white font-sans text-xs font-medium">PT Surya Logistik</span>
                  <span className="text-[#8A8A85] text-[10px]">#REQ-8941</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-[#162B1D] text-[#4ADE80] px-2 py-0.5 rounded border border-[#234E2E]">Score 810 (PASS)</span>
                  <span className="text-[10px] bg-[#292929] text-white px-2 py-0.5 rounded font-sans">Approve</span>
                </div>
              </div>
              <div className="bg-[#1F1F1F] p-2 rounded flex items-center justify-between border border-[#2B2B2B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF3B30]"></span>
                  <span className="text-white font-sans text-xs font-medium">Apex Retail Group</span>
                  <span className="text-[#8A8A85] text-[10px]">#REQ-8939</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-[#3B1515] text-[#FF6B6B] px-2 py-0.5 rounded border border-[#5E1F1F]">Anomaly Detected</span>
                  <span className="text-[10px] bg-[#FF3B30] text-white px-2 py-0.5 rounded font-sans font-bold">Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Anvieo Hackathon BI 2026 POS
  return (
    <div className={`w-full bg-[#141414] border border-[#2E2E2E] rounded-xl overflow-hidden font-sans text-white ${className}`}>
      {/* Top Bar */}
      <div className="bg-[#0C0C0C] px-4 py-2.5 border-b border-[#242424] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
          <span className="ml-2 text-xs font-bold text-white flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#FF3B30]" />
            ANVIEO POS × GARDA AI
          </span>
        </div>
        <span className="text-[10px] font-mono bg-[#1E1E1E] text-[#D4D4D4] px-2.5 py-0.5 rounded-full border border-[#333]">
          Hackathon BI 2026
        </span>
      </div>

      {/* POS Interface Layout */}
      <div className="p-4 sm:p-5 bg-[#0F0F0F] space-y-3">
        {/* AI GARDA banner */}
        <div className="bg-[#1C1C1C] border border-[#333333] p-3 rounded-lg flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded bg-[#FF3B30] text-white shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                GARDA AI Insight Engine
                <span className="text-[9px] font-mono bg-[#282828] text-[#8A8A85] px-1.5 py-0.2 rounded">Real-time</span>
              </div>
              <div className="text-[11px] text-[#A3A3A0] mt-0.5">
                "Stok Kopi Arabika 250g sisa 8 unit. Tren lonjakan pesanan jam 14:00. Restock direkomendasikan."
              </div>
            </div>
          </div>
          <button className="text-[10px] bg-white text-black font-bold px-2.5 py-1 rounded shrink-0 hover:bg-[#F1F0EC] transition-colors">
            Auto-Order
          </button>
        </div>

        {/* Cashier Speed Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#181818] p-2 rounded border border-[#282828] text-center">
            <div className="text-[9px] font-mono text-[#8A8A85]">TRANSACTION</div>
            <div className="text-xs font-bold text-white mt-0.5">3.8 Detik</div>
          </div>
          <div className="bg-[#181818] p-2 rounded border border-[#282828] text-center">
            <div className="text-[9px] font-mono text-[#8A8A85]">PAYMENT METHOD</div>
            <div className="text-xs font-bold text-[#FF3B30] mt-0.5">QRIS Standar BI</div>
          </div>
          <div className="bg-[#181818] p-2 rounded border border-[#282828] text-center">
            <div className="text-[9px] font-mono text-[#8A8A85]">OFFLINE SYNC</div>
            <div className="text-xs font-bold text-[#22C55E] mt-0.5">Zero Loss</div>
          </div>
        </div>
      </div>
    </div>
  );
};
