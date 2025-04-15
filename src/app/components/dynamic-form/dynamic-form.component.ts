import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormBuilderComponent {
  selectedFieldType: string = 'text';
  fieldLabel: string = '';
  fieldOptions: string = '';

  fields: any[] = [];
  formFields: any[] = [];
  formBuilt: boolean = false;
  formSubmitted: boolean = false;

  addField() {
    if (!this.fieldLabel) return;

    const needsOptions = ['radio', 'checkbox', 'dropdown'].includes(
      this.selectedFieldType
    );

    const optionsArray = needsOptions
      ? this.fieldOptions
          .split(',')
          .map((opt) => opt.trim())
          .filter((opt) => opt)
      : [];

    this.fields.push({
      label: this.fieldLabel,
      type: this.selectedFieldType,
      options: optionsArray,
      value: this.selectedFieldType === 'checkbox' ? {} : '',
    });

    this.resetInputs();
  }

  buildForm() {
    this.formFields = this.fields.map((field) => ({
      ...field,
      value: field.type === 'checkbox' ? {} : '',
    }));
    this.formBuilt = true;
    this.formSubmitted = false;
  }

  resetInputs() {
    this.fieldLabel = '';
    this.fieldOptions = '';
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log('Form Submitted Data:', this.formFields);
  }
}
