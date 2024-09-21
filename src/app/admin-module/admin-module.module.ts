import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './Components/user-management/user-management.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModuleModule { }
