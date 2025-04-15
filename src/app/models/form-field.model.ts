export interface FormFieldOption {
  label: string;
  value: string;
}

// src/app/models/form-field.model.ts

export interface FormField {
  type: 'text' | 'textarea' | 'dropdown' | 'checkbox' | 'radio'; // Strict type definition
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
}
