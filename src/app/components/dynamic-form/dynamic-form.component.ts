import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

interface Field {
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
  required: boolean;
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent {
  selectedFieldType = 'text';
  fieldLabel = '';
  fieldPlaceholder = '';
  fieldOptions = '';
  isFieldRequired = false;
  errorMessage = '';

  fields: Field[] = [];
  formFields: Field[] = [];
  formBuilt = false;
  formSubmitted = false;

  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  addField() {
    if (!this.fieldLabel.trim()) {
      this.errorMessage = 'Label is required.';
      return;
    }

    if (
      (this.selectedFieldType === 'radio' ||
        this.selectedFieldType === 'checkbox' ||
        this.selectedFieldType === 'dropdown') &&
      !this.fieldOptions.trim()
    ) {
      this.errorMessage = 'Options are required for this field type.';
      return;
    }

    const newField: Field = {
      label: this.fieldLabel.trim(),
      type: this.selectedFieldType,
      placeholder: this.fieldPlaceholder?.trim(),
      required: this.isFieldRequired,
      options:
        this.selectedFieldType === 'radio' ||
        this.selectedFieldType === 'checkbox' ||
        this.selectedFieldType === 'dropdown'
          ? this.fieldOptions.split(',').map((opt) => opt.trim())
          : [],
    };

    this.fields.push(newField);
    this.errorMessage = '';
    this.resetInputs();
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
  }

  resetInputs() {
    this.fieldLabel = '';
    this.fieldPlaceholder = '';
    this.fieldOptions = '';
    this.isFieldRequired = false;
  }

  buildForm() {
    this.form = this.fb.group({});
    this.formFields = [...this.fields];

    for (const field of this.formFields) {
      if (field.type === 'checkbox') {
        const group = this.fb.group({});
        field.options?.forEach((opt) => {
          group.addControl(opt, new FormControl(false));
        });
        this.form.addControl(field.label, group);
      } else {
        const validators = field.required ? [Validators.required] : [];
        this.form.addControl(field.label, new FormControl('', validators));
      }
    }

    this.formBuilt = true;
    this.formSubmitted = false;
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.formSubmitted = true;
    console.log('Form submitted:', this.form.value);
  }
}
