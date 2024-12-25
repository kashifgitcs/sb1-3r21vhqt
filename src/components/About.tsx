import React from 'react';
import { Music, PartyPopper, Gamepad2, Timer } from 'lucide-react';

export function About() {
  const features = [
    { icon: <Music className="w-8 h-8" />, text: "Live Music & Dance" },
    { icon: <PartyPopper className="w-8 h-8" />, text: "Festive Celebrations" },
    { icon: <Gamepad2 className="w-8 h-8" />, text: "Fun Games" },
    { icon: <Timer className="w-8 h-8" />, text: "Countdown Event" },
  ];

  return (
    <section className="bg-black/95 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Celebrate the New Year Like Never Before!
          </span>
        </h2>
        
        <p className="text-white/80 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
          Join us at Narayana Engineering College, Gudur, for an unforgettable New Year's Eve celebration. 
          Experience an evening filled with music, dance, games, and a spectacular countdown to 2025. 
          Bring your friends and family to kick off the New Year with joy and excitement!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-yellow-400 mb-3">
                {feature.icon}
              </div>
              <p className="text-white/90">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}