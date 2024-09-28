import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { ResestPassWordComponent } from './Components/resest-pass-word/resest-pass-word.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { ResetComponent } from './Components/reset/reset.component';
import { SinscrireComponent } from './Components/sinscrire/sinscrire.component';


@NgModule({
  declarations: [
    LoginComponent,
    ResestPassWordComponent,
    ResetComponent,
    SinscrireComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModuleModule { }
