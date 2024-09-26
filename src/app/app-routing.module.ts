import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-module/Components/login/login.component';
import { AdminDashboardComponent } from './admin-module/Components/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './core-module/Guards/admin.guard';
import { UserProfileComponent } from './user-module/Components/user-profile/user-profile.component';
import { authGuard } from './core-module/Guards/auth.guard';
import { UserManagementComponent } from './admin-module/Components/user-management/user-management.component';
import { UserSettingsComponent } from './user-module/Components/user-settings/user-settings.component';

const routes: Routes = [
  {path:"",component: LoginComponent,pathMatch:'full'},
  {path:"Admin",component:AdminDashboardComponent,canActivate:[AdminGuard],pathMatch:'full'},
  {path:"UserProfile",component:UserProfileComponent,canActivate:[authGuard],pathMatch:'full'},
  {path:"UserManagement",component:UserManagementComponent,pathMatch:'full'},
  {path:"Login",component:LoginComponent,pathMatch:'full'},
  {path:"Setting",component:UserSettingsComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
