import React from 'react';
import { Music2, Trophy, Sparkles, UtensilsCrossed, Camera, Mic2 } from 'lucide-react';
import { HighlightCard } from './HighlightCard';

const highlights = [
  {
    title: 'Live DJ and Dance Floor',
    description: 'Dance the night away with our professional DJ spinning the latest hits',
    icon: <Music2 className="w-8 h-8" />,
  },
  {
    title: 'Fun Games and Prizes',
    description: 'Participate in exciting games and win amazing prizes',
    icon: <Trophy className="w-8 h-8" />,
  },
  {
    title: 'Countdown & Fireworks',
    description: 'Welcome 2025 with a spectacular fireworks display',
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    title: 'Food & Refreshments',
    description: 'Enjoy a variety of delicious snacks and beverages',
    icon: <UtensilsCrossed className="w-8 h-8" />,
  },
  {
    title: 'Photo Booth',
    description: 'Capture memorable moments with props and instant prints',
    icon: <Camera className="w-8 h-8" />,
  },
  {
    title: 'Special Performances',
    description: 'Be amazed by talented guest performers throughout the night',
    icon: <Mic2 className="w-8 h-8" />,
  },
];

export function EventHighlights() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Event Highlights
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              title={highlight.title}
              description={highlight.description}
              icon={highlight.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}