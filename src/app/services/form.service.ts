import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormField } from '../models/form-field.model';

@Injectable({ providedIn: 'root' })
export class FormService {
  private fieldsSubject = new BehaviorSubject<FormField[]>([]);
  fields$ = this.fieldsSubject.asObservable();

  updateFields(fields: FormField[]) {
    this.fieldsSubject.next(fields);
  }

  getFields() {
    return this.fields$;
  }
}
