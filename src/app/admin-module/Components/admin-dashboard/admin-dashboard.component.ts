import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core-module/Services/user.service';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{

  users:User[]=this.userService.getUsers()
  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.users=this.userService.getUsers()
    console.log(this.users)
  }
}
