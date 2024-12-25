import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-yellow-400/20 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-black/50 hover:bg-black/70 transition-colors"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-yellow-400 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 bg-black/30 text-white/80">
          {answer}
        </div>
      </div>
    </div>
  );
}