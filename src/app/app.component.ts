import { Component } from '@angular/core';
import { FormField } from './models/form-field.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  formFields: FormField[] = [];

  onFormBuilt(fields: FormField[]) {
    this.formFields = fields;
  }
}
