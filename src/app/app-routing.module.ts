import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-module/Components/login/login.component';
import { AdminDashboardComponent } from './admin-module/Components/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './core-module/Guards/admin.guard';
import { UserProfileComponent } from './user-module/Components/user-profile/user-profile.component';
import { authGuard } from './core-module/Guards/auth.guard';
import { UserManagementComponent } from './admin-module/Components/user-management/user-management.component';
import { UserSettingsComponent } from './user-module/Components/user-settings/user-settings.component';
import { ResestPassWordComponent } from './auth-module/Components/resest-pass-word/resest-pass-word.component';
import { ResetComponent } from './auth-module/Components/reset/reset.component';
import { SinscrireComponent } from './auth-module/Components/sinscrire/sinscrire.component';

const routes: Routes = [
  {path:"",component: LoginComponent,pathMatch:'full',title:"Login page"},
  {path:"Admin",component:AdminDashboardComponent,canActivate:[AdminGuard],pathMatch:'full',title:"Admin dashboard"},
  {path:"UserProfile",component:UserProfileComponent,canActivate:[authGuard],pathMatch:'full',title:"Profile"},
  {path:"UserManagement",component:UserManagementComponent,pathMatch:'full',title:"User management"},
  {path:"Login",component:LoginComponent,pathMatch:'full'},
  {path:"Setting",component:UserSettingsComponent,pathMatch:'full',title:"Settings"},
  {path:"Reset",component:ResestPassWordComponent,pathMatch:'full',title:"Reset password"},
  {path:"ResetPwd",component:ResetComponent,pathMatch:'full',title:"Reset password"},
  {path:"Sign Up",component:SinscrireComponent,pathMatch:'full',title:"Sign Up"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
