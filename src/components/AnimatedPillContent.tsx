import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedPillContentProps {
  label: string;
  icon: LucideIcon;
}

export const AnimatedPillContent: React.FC<AnimatedPillContentProps> = ({ label, icon: Icon }) => (
  <>
    <span className="absolute left-2 top-1/2 z-0 h-7 w-7 -translate-y-1/2 rounded-full bg-accent pointer-events-none transition-all duration-500 ease-out group-hover:left-1/2 group-hover:h-[300%] group-hover:w-[120%] group-hover:-translate-x-1/2" />
    <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-sm transition-colors duration-300 group-hover:bg-white group-hover:text-accent">
      <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </span>
    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
      {label}
    </span>
  </>
);
