import React from 'react';
import { Sparkles, Clock, MapPin, PartyPopper } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[#B8860B] opacity-80"></div>

      {/* Animated sparkles */}
      <div className="absolute inset-0">
        <div className="animate-pulse absolute top-1/4 left-1/4 text-yellow-400">
          <Sparkles size={24} />
        </div>
        <div className="animate-pulse absolute top-1/3 right-1/3 text-yellow-400">
          <Sparkles size={32} />
        </div>
        <div className="animate-pulse absolute bottom-1/4 right-1/4 text-yellow-400">
          <Sparkles size={24} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <PartyPopper className="text-yellow-400 mb-6 w-16 h-16 animate-bounce" />
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            New Year Sparkles 2024
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
          Ring in the New Year with Style!
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12 text-white/80">
          <div className="flex items-center gap-2">
            <Clock className="text-yellow-400" />
            <span>7:00 PM - Midnight, Dec 31, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-yellow-400" />
            <span>Narayana Engineering College, Gudur</span>
          </div>
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50">
          Book Your Spot Now!
        </button>
      </div>
    </div>
  );
}