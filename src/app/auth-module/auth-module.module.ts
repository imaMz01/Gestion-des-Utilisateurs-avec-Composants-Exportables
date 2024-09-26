import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { ResestPassWordComponent } from './Components/resest-pass-word/resest-pass-word.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    LoginComponent,
    ResestPassWordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ToastrModule.forRoot()
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModuleModule { }
