import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [AppComponent, DynamicFormComponent],
  imports: [
    BrowserModule,
    RouterModule, // Add this to imports
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
