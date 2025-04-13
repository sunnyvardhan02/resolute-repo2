import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, FormBuilderComponent, DynamicFormComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
