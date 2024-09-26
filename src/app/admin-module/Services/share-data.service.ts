import { Injectable } from '@angular/core';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  user!:User
  constructor() { }
  setUser(updatedUser:User){
    this.user=updatedUser
  }
  getUser():User{
    return this.user
  }
}
