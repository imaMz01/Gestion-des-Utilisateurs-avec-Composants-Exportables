import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private userservice:UserService) { }
  users = this.userservice.getUsers()
  user!:User|undefined
   authenticate(email : String,password : String):User | string{
     this.user = this.users.find(user => user.email === email && user.password === password);
      // if(this.user && this.user.activated)
      //   return this.user
      // else if(this.user && !this.user.activated)
      //   return "Your account doesn't activated yet"
      // else
      //   return "User or password is incorrect"
      return this.user ?(this.user.activated ? this.user : "Your account isn't activated yet") : "User or password is incorrect" 
  }
  checkEmail(email:String) : boolean{
    let user = this.users.find(user => user.email === email)
    if(user != undefined){
      return true
    }
    return false
  }
  checkRoleAdmin() : boolean{
    if(this.user && this.user.role.role === 'admin'){
      return true
    }
    return false
  }

  checkRoleUser() : boolean{
    if(this.user && this.user.role.role === 'user'){
      return true
    }
    return false
  }
}
