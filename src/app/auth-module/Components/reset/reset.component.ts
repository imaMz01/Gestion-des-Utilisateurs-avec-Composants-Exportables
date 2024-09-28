import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core-module/Services/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent implements OnInit{

  email:string=""
  formPass!:FormGroup

  constructor(private route : ActivatedRoute,private formBuilder:FormBuilder,private userService:UserService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.email = data['email']
      console.log(this.email)
    })
    this.formPass = this.formBuilder.group({
      password : ['',[Validators.required,this.passwordValidator()]],
      confirmPassword : ['',Validators.required]
    },{validators:this.matchPassword('password','confirmPassword')})
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/.test(control.value) ? null : { 
        passwordInvalid: true 
      };
    };
  }

  matchPassword(pass:string,confirmPass:string) : ValidatorFn{
    return (form:AbstractControl):ValidationErrors | null =>{
      const password = form.get(pass)
      const confirmPassword = form.get(confirmPass)
      return (password && confirmPassword && password.value === confirmPassword.value) ? null : {passwordsMismatch: true }
    }
  }

  submitForm(){
    let user = this.userService.users.find(user => user.email = this.email)
    if(user !== undefined){
      user.password = this.formPass.value.password
      console.log(user)
    }
  }
}
