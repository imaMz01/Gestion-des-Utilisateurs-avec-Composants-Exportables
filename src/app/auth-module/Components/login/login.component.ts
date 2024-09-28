import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core-module/Services/auth.service';

import { Router } from '@angular/router';
import { AuthoService } from '../../Services/autho.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  email : string = ""
  password : string = ""
  constructor(private auth:AuthService,private route:Router,private autho:AuthoService,private toastr: ToastrService){}

  ngOnInit(): void {
    
  }
  reset(){
    this.route.navigate(['/Reset'])
  }
  register(){
    this.route.navigate(['/Sign Up'])
  }
  authenticate(){
    console.log(this.email)
    console.log(this.password)
    var result = this.auth.authenticate(this.email,this.password)
    if(typeof(result) === 'string'){
      this.toastr.error(result,"Error")
    }else{
      this.toastr.success("Authentication successful","Sucess")
      this.autho.setUserAuth(result)
      if(result.role.role == 'admin'){
        this.route.navigate(['/Admin'])
      }else if(result.role.role == 'user'){
        this.route.navigate(['/UserProfile'])
      }
    }
    
  }

}
