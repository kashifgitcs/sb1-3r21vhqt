import React from 'react';
import { FAQAccordion } from './FAQAccordion';
import { faqData } from './faqData';

export function FAQSection() {
  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Frequently Asked Questions
          </span>
        </h2>
        
        <p className="text-white/80 text-lg text-center max-w-3xl mx-auto mb-12">
          Everything you need to know about the New Year's celebration
        </p>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqData} />
        </div>
      </div>
    </section>
  );
}