import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  guestCount: number;
  specialRequirements: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  guestCount?: string;
  specialRequirements?: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  guestCount: 1,
  specialRequirements: ''
};

export function useRegistrationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.guestCount < 1 || formData.guestCount > 10) {
      newErrors.guestCount = 'Please select between 1 and 10 guests';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      alert('Registration submitted successfully!');
      setFormData(initialFormData);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit
  };
}