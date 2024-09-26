import { Component } from '@angular/core';
import { ShareDataService } from '../../../admin-module/Services/share-data.service';
import { AuthoService } from '../../../auth-module/Services/autho.service';
import { Router } from '@angular/router';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  userAuthenticated!:User
  constructor(private shareData:ShareDataService,private autho:AuthoService,private route:Router){
    autho.getUser.subscribe(user=> {
      this.userAuthenticated = user
      console.log(this.userAuthenticated)
  })
  }
  logOut(){
    this.route.navigate(['/Login'])
  }
  update(user:User){
    this.shareData.setUser(user)
    this.route.navigate(['\Setting'])
  }
}
