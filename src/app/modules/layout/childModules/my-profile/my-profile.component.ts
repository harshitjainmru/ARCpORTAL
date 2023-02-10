import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { validation } from 'src/app/constants/formValidation';
import { ConfirmedValidator } from 'src/app/constants/passwordMatch';
import { validationMessage } from 'src/app/constants/validatorsMessage';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  hide: boolean = true;
  hide1: boolean = true;
  hide2: boolean = true;
  profileForm!: FormGroup;
  errorMessage:any
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.makeForm();
    this.errorMessage=validationMessage
  }
  makeForm() {
    this.profileForm = this.fb.group({
      current_password: [
        '',
        [validation.INPUT_REQUIRED, validation.PASSWORD.PASSWORD_PATTERN],
      ],
      password: [
        '',
        [validation.INPUT_REQUIRED, validation.PASSWORD.PASSWORD_PATTERN],
      ],
      cnfPassword: [
        '',
        [validation.INPUT_REQUIRED, validation.PASSWORD.PASSWORD_PATTERN],
      ],
    },{
      validator: ConfirmedValidator('password', 'cnfPassword')
    }
    );
  }
}
