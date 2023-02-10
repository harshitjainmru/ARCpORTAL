import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { validation } from 'src/app/constants/formValidation';
import { DASHBOARD, FORGOT } from 'src/app/constants/router';
import { validationMessage } from 'src/app/constants/validatorsMessage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm!: FormGroup;
  errorMessage: any;
  spinner=false
  constructor(private route: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage;
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          validation.INPUT_REQUIRED,
          validation.EMAIL.EMAIL_email,
          validation.EMAIL.EMAIL_PATTERN,
        ],
      ],
      password: ['', [validation.INPUT_REQUIRED,validation.PASSWORD.PASSWORD_PATTERN]],
      // ,Validators.pattern( "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{6,}$"
    });
  }
  navToForgot() {
    console.log('jiiii');

    this.route.navigate([FORGOT.baseUrl]);
  }
  onClick(){
    if(this.loginForm.valid){
      localStorage.setItem('tok','true')
      this.route.navigate([DASHBOARD.baseUrl])
    }
  }
}
