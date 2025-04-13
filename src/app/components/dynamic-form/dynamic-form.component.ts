import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField } from 'src/app/models/form-field.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent {
  @Input() fields: FormField[] = [];
  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    this.createForm();
  }

  createForm() {
    const group: any = {};
    this.fields.forEach((field, index) => {
      const validators = field.required ? [Validators.required] : [];
      group['field_' + index] = ['', validators];
    });
    this.form = this.fb.group(group);
  }

  submitForm() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Form Submitted ✅', this.form.value);
      alert('Form submitted successfully!');
    } else {
      console.warn('Form has errors ❌');
    }
  }

  getControl(index: number) {
    return this.form.get('field_' + index);
  }
}
