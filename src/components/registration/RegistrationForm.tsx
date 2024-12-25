import React from 'react';
import { useRegistrationForm } from './useRegistrationForm';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { SubmitButton } from './SubmitButton';

export function RegistrationForm() {
  const { formData, errors, handleChange, handleSubmit } = useRegistrationForm();

  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Register Now
          </span>
        </h2>
        
        <p className="text-white/80 text-lg text-center max-w-3xl mx-auto mb-12">
          Secure your spot for the most anticipated New Year's celebration!
        </p>

        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-black/50 p-8 rounded-xl border border-yellow-400/20 backdrop-blur-sm"
        >
          <FormInput
            label="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />

          <FormInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />

          <FormInput
            label="Number of Guests"
            name="guestCount"
            type="number"
            min="1"
            max="10"
            value={formData.guestCount}
            onChange={handleChange}
            error={errors.guestCount}
            required
          />

          <FormTextArea
            label="Special Requirements"
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            error={errors.specialRequirements}
            placeholder="Any dietary restrictions, accessibility needs, or special requests?"
          />

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}