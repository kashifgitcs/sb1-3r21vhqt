import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EventHighlights } from './components/highlights/EventHighlights';
import { EventSchedule } from './components/schedule/EventSchedule';
import { RegistrationForm } from './components/registration/RegistrationForm';
import { FAQSection } from './components/faq/FAQSection';

export default function App() {
  return (
    <div className="bg-black relative overflow-hidden">
      <Hero />
      <About />
      <EventHighlights />
      <EventSchedule />
      <RegistrationForm />
      <FAQSection />
    </div>
  );
}