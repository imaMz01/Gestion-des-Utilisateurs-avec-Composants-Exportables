import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core-module/Services/user.service';
import { User } from '../../../Models/User';
import { AuthoService } from '../../../auth-module/Services/autho.service';
import { Router } from '@angular/router';
import { ShareDataService } from '../../Services/share-data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{

  users:User[]=this.userService.getUsers()
  userAuthenticated!:User
  constructor(private userService:UserService,private autho:AuthoService,private route:Router,private shareData:ShareDataService){
     autho.getUser.subscribe(user=> {
      this.userAuthenticated = user
      console.log(this.userAuthenticated)
  })
  }

  ngOnInit(): void {
    this.users=this.userService.getUsers()
    console.log(this.users)
  }
  update(user:User){
    this.shareData.setUser(user)
    this.route.navigate(['\UserManagement'])
  }
  delete(id:number){
    this.userService.delete(id)
  }
  logOut(){
    this.route.navigate(['/Login'])
  }
}
