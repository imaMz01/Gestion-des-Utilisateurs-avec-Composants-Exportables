import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../Models/User';
import { UserService } from '../../../core-module/Services/user.service';
import { Role } from '../../../Models/Role';
import { every } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input() userShared !:User
  @Input() redirect : String=""
  roles : Role[]=this.userService.getRoles()
  role !: Role|undefined
  constructor(private userService:UserService,private route:Router){}

  
  updateRole(event:any){
    console.log(event?.target.value)
    this.role =this.roles.find(r => r.role === event.target.value)
    if(this.role){
      this.userShared.role=this.role
       console.log(this.userShared)
    }
    
  }
  update(){
    this.route.navigate(['/'+this.redirect])
  }
  // userUpdated : User ={
  //   email:this.userShared.email,
  //   id:this.userShared.id,
  //   name:this.userShared.name,
  //   password:this.userShared.password,
  //   role:this.userShared.role
  // }

  // @Output() updated = new EventEmitter<User>()

  // updateUser(){
  //   this.updated.emit(this.userUpdated)
  // }
}
