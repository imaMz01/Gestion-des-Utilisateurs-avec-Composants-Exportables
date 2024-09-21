import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core-module/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  email : string = ""
  password : string = ""
  constructor(private auth:AuthService,private route:Router){}

  ngOnInit(): void {
    
  }
  authenticate(){
    console.log(this.email)
    console.log(this.password)
    var result = this.auth.authenticate(this.email,this.password)
    if(typeof(result) === 'string'){
      console.log(result)
    }else{
      if(result.role.role == 'admin'){
        this.route.navigate(['/Admin'])
      }else if(result.role.role == 'user'){
        this.route.navigate(['/UserProfile'])
      }
    }
    
  }

}
