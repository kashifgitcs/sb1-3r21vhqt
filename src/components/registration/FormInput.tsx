import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  min?: string;
  max?: string;
}

export function FormInput({ 
  label, 
  name, 
  type, 
  value, 
  onChange, 
  error, 
  required,
  min,
  max 
}: FormInputProps) {
  return (
    <div className="mb-6">
      <label 
        htmlFor={name}
        className="block text-white mb-2 font-medium"
      >
        {label} {required && <span className="text-yellow-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        className="w-full bg-black/30 border border-yellow-400/20 rounded-lg px-4 py-3 text-white 
                 placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-colors"
      />
      {error && (
        <p className="mt-1 text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
}