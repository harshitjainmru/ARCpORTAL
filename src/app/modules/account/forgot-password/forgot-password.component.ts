import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validation } from 'src/app/constants/formValidation';
import { LOGIN } from 'src/app/constants/router';
import { validationMessage } from 'src/app/constants/validatorsMessage';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
linkSent=false
resetForm!:FormGroup
errorMessage:any
spinner:boolean=false
disablebtn:boolean=false
  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.createForm();
    this.errorMessage=validationMessage
  }
  createForm(){
    this.resetForm=this.fb.group({
      email:['',[validation.INPUT_REQUIRED,validation.EMAIL.EMAIL_email,validation.EMAIL.EMAIL_PATTERN]],

    })

  }
  onSubmit(){
    if(this.resetForm.valid){
      this.linkSent = true
      this.disablebtn=false
    }
  }
  navToLogin(){
    this.route.navigate([LOGIN.baseUrl])
  }

}
