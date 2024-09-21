import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-module/Components/login/login.component';
import { AdminDashboardComponent } from './admin-module/Components/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './core-module/Guards/admin.guard';
import { UserProfileComponent } from './user-module/Components/user-profile/user-profile.component';
import { authGuard } from './core-module/Guards/auth.guard';

const routes: Routes = [
  {path:"",component: LoginComponent},
  {path:"Admin",component:AdminDashboardComponent,canActivate:[AdminGuard]},
  {path:"UserProfile",component:UserProfileComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
