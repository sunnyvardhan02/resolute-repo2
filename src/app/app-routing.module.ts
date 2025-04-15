import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormBuilderComponent } from './components/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', component: DynamicFormBuilderComponent }, // Default route when app loads
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
