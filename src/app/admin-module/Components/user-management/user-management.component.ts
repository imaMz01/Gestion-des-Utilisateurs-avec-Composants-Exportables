import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../Services/share-data.service';
import { User } from '../../../Models/User';
import { AuthoService } from '../../../auth-module/Services/autho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit{

  user!:User
  userAuthenticated!:User
  redirect:string="Admin"
  constructor(private shareData:ShareDataService,private autho:AuthoService,private route:Router){
    autho.getUser.subscribe(user=> {
      this.userAuthenticated = user
      console.log(this.userAuthenticated)
  })
  }
  ngOnInit(): void {
    this.user=this.shareData.getUser()
    console.log(this.shareData.getUser())
    
  }
  logOut(){
    this.route.navigate(['/Login'])
  }
  // getUser(userUpdated:User){
  //   this.user=userUpdated
  //   console.log("received data"+this.user)
  // }
}
