import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HighlightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function HighlightCard({ title, description, icon }: HighlightCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-black/80 to-black/40 p-6 backdrop-blur-sm transition-all hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="mb-4 text-yellow-400 transition-transform group-hover:scale-110">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
}