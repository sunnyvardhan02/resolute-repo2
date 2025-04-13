export interface FormFieldOption {
  label: string;
  value: string;
}

export interface FormField {
  type: 'text' | 'textarea' | 'dropdown' | 'checkbox' | 'radio';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: FormFieldOption[]; // for dropdown and radio
}
