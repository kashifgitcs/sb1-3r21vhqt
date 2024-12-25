import React from 'react';
import { Send } from 'lucide-react';

export function SubmitButton() {
  return (
    <button 
      type="submit"
      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg
               transform transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-400/50
               flex items-center justify-center gap-2"
    >
      <span>Submit Registration</span>
      <Send className="w-5 h-5" />
    </button>
  );
}