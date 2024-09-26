import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UserSettingsComponent } from './Components/user-settings/user-settings.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ]
})
export class UserModuleModule { }
