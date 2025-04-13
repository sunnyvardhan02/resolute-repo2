import { Component, EventEmitter, Output } from '@angular/core';
import { FormField } from 'src/app/models/form-field.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent {
  @Output() formBuilt = new EventEmitter<FormField[]>();
  fields: FormField[] = [];

  newField: FormField = {
    type: 'text',
    label: '',
    placeholder: '',
    required: false,
    options: [],
  };

  addField() {
    const fieldCopy: FormField = JSON.parse(JSON.stringify(this.newField));
    this.fields.push(fieldCopy);
    this.resetNewField();
  }

  resetNewField() {
    this.newField = {
      type: 'text',
      label: '',
      placeholder: '',
      required: false,
      options: [],
    };
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
  }

  buildForm() {
    this.formBuilt.emit(this.fields);
  }

  setOptionsFromInput(value: string) {
    this.newField.options = value
      .split(',')
      .map((opt) => ({ label: opt.trim(), value: opt.trim() }));
  }
}
