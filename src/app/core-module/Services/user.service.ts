import { Injectable } from '@angular/core';
import { Role } from '../../Models/Role';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  roles : Role[] = [
    {id:1,role:"user"},
    {id:2,role:"admin"}
  ]
  users : User[] = [
    {id:1,name:"Khalil",email:"khalil@gmail.com",password:"123456789",role:this.roles[1]},
    {id:1,name:"Taha",email:"taha@gmail.com",password:"987654321",role:this.roles[0]}
  ]
  constructor() { }

  getUsers(){
    return this.users
  }
}
