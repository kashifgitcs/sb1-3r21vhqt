import React from 'react';
import { 
  GlassWater, 
  Sparkles, 
  Gamepad2, 
  Music2, 
  Mic2, 
  Rocket,
  CheckCircle2
} from 'lucide-react';
import { TimelineEvent } from './TimelineEvent';

const scheduleEvents = [
  {
    time: "7:00 PM",
    title: "Guest Check-in and Welcome Drinks",
    icon: <GlassWater className="w-5 h-5" />,
  },
  {
    time: "7:30 PM",
    title: "Opening Ceremony",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    time: "8:00 PM",
    title: "Fun Games and Activities",
    icon: <Gamepad2 className="w-5 h-5" />,
  },
  {
    time: "9:00 PM",
    title: "Live DJ and Dance Floor Opens",
    icon: <Music2 className="w-5 h-5" />,
  },
  {
    time: "10:30 PM",
    title: "Special Guest Performances",
    icon: <Mic2 className="w-5 h-5" />,
  },
  {
    time: "11:30 PM",
    title: "Countdown to 2025 and Fireworks",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    time: "12:00 AM",
    title: "Event Wrap-up",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
];

export function EventSchedule() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Event Schedule
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[calc(24px+3rem)] top-6 bottom-6 w-px bg-gradient-to-b from-yellow-400/50 to-yellow-400/10"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {scheduleEvents.map((event, index) => (
                <TimelineEvent
                  key={index}
                  time={event.time}
                  title={event.title}
                  icon={event.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}