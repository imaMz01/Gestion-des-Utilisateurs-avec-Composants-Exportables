import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../../core-module/Services/user.service';
import { User } from '../../../Models/User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrl: './sinscrire.component.css'
})
export class SinscrireComponent implements OnInit{
  
  user!:User
  signupForm!:FormGroup
  constructor(private formBuilder: FormBuilder,private userService:UserService,private toastr:ToastrService){}

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.email]],
      password:['',[this.passwordValidator()]],
      confirmPassword:['',[Validators.required]]
  },{validators:this.matchPassword('password','confirmPassword')})
  }
  submitForm(){
    this.user={
      id:this.userService.users.length+1,
      email:this.signupForm.value.email,
      name:this.signupForm.value.name,
      password:this.signupForm.value.password,
      role:this.userService.roles[0],
      activated:false
    }
    this.userService.addUser(this.user)
    this.toastr.success("the user was added successfully")
    this.signupForm.reset()
    console.log(this.signupForm)
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

}
