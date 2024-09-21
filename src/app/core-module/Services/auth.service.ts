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
     return this.user || "User or password is incorrect"; 
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
