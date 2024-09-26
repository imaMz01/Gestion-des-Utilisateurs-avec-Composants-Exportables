import { Component } from '@angular/core';
import { User } from '../../../Models/User';
import { Router } from '@angular/router';
import { AuthoService } from '../../../auth-module/Services/autho.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {


  userShared!:User
  redirect:string="UserProfile"
  constructor(private route:Router,private autho:AuthoService){
    autho.getUser.subscribe(user=> {
      this.userShared = user
      console.log(this.userShared)
  })
  }
  logOut(){
    this.route.navigate(['/Login'])
  }
}
