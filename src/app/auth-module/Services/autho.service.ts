import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {

  userAuth!:User
  constructor(){}
  private message = new BehaviorSubject(this.userAuth)
  getUser = this.message.asObservable()

  setUserAuth(user: User) {
    this.userAuth = user;
    this.message.next(this.userAuth); 
  }
}
