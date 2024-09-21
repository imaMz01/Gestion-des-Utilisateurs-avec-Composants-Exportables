import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './Services/auth.service';
import { UserService } from './Services/user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers :[
    AuthService
  ]
})
export class CoreModuleModule { }
