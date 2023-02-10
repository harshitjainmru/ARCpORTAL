import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { validation } from 'src/app/constants/formValidation';
import { ConfirmedValidator } from 'src/app/constants/passwordMatch';
import { validationMessage } from 'src/app/constants/validatorsMessage';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide:boolean=true
  hide1:boolean=true
  disable_btn:boolean=true
  resetForm!:FormGroup
  spinner=false
  errorMessage:any
  // err:boolean=true
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
    this.errorMessage=validationMessage
  }
  createForm() {
    this.resetForm = this.fb.group({
      password: ["", [validation.INPUT_REQUIRED,validation.PASSWORD.PASSWORD_PATTERN]],
      cnfPassword: ["", [validation.INPUT_REQUIRED,validation.PASSWORD.PASSWORD_PATTERN]],
    },{
      validator: ConfirmedValidator('password', 'cnfPassword')
    }
    )
  }

  onSubmit() {

    if (
      this.resetForm.valid &&
      this.resetForm.controls.password.value ==
      this.resetForm.controls.cnfPassword.value){
        this.disable_btn=false
        console.log('harshit');

        // this.err=false
      }
    }
}
