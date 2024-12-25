import React from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
}

export function FormTextArea({ 
  label, 
  name, 
  value, 
  onChange, 
  error,
  placeholder 
}: FormTextAreaProps) {
  return (
    <div className="mb-6">
      <label 
        htmlFor={name}
        className="block text-white mb-2 font-medium"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="w-full bg-black/30 border border-yellow-400/20 rounded-lg px-4 py-3 text-white 
                 placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-colors"
      />
      {error && (
        <p className="mt-1 text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
}