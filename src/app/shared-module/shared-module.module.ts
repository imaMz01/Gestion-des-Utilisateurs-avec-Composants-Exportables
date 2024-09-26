import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './Components/form/form.component';
import { FormsModule } from '@angular/forms';
import { DashComponent } from './Components/dash/dash.component';



@NgModule({
  declarations: [
    FormComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormComponent
  ]

})
export class SharedModuleModule { }
