import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineEventProps {
  time: string;
  title: string;
  icon: React.ReactNode;
}

export function TimelineEvent({ time, title, icon }: TimelineEventProps) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="flex-shrink-0 w-24 text-right text-yellow-400 font-mono">{time}</div>
      <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center border border-yellow-400/30 group-hover:border-yellow-400 transition-colors">
        <div className="text-yellow-400">
          {icon}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-white text-lg font-semibold group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}