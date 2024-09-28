import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core-module/Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ɵnormalizeQueryParams } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resest-pass-word',
  templateUrl: './resest-pass-word.component.html',
  styleUrl: './resest-pass-word.component.css'
})
export class ResestPassWordComponent implements OnInit{

  
  emailForm!:FormGroup
  constructor(private auth :AuthService,private toastr : ToastrService,private route :Router,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]]
    })
  }

  check(){
    if(this.auth.checkEmail(this.emailForm.value.email)){
      this.route.navigate(['/ResetPwd'],{ queryParams :{ email : this.emailForm.value.email}})
    }else{
      this.toastr.error("Email doesn't exist", "Error")
    }
  }
}
