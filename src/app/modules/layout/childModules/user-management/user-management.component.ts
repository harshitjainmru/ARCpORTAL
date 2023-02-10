import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {validation} from '../../../../constants/formValidation';
import { ConfirmedValidator } from '../../../../constants/passwordMatch';
import {validationMessage} from '../../../../constants/validatorsMessage';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  url:any = '';
  showImage:boolean=true
  userForm!:FormGroup
  hide:boolean=true
  hide1:boolean=true
  errorMessage:any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.makeForm()
    this.errorMessage=validationMessage
  }
  makeForm(){
    this.userForm=this.fb.group({
      full_name:['',[validation.INPUT_REQUIRED,validation.NAME.NAME_LENGTH,validation.NAME.NAME_PATTERN]],
      email:['',[validation.INPUT_REQUIRED,validation.EMAIL.EMAIL_email,validation.EMAIL.EMAIL_PATTERN]],
      phone_number:['',[validation.INPUT_REQUIRED]],
      postal_code:['',[validation.INPUT_REQUIRED]],
      password: ["", [validation.INPUT_REQUIRED,validation.PASSWORD.PASSWORD_PATTERN]],
      cnfPassword: ["", [validation.INPUT_REQUIRED,validation.PASSWORD.PASSWORD_PATTERN]],

    }, {
      validator: ConfirmedValidator('password', 'cnfPassword')
    })
  }

  onSelectFile(event:any) {
    this.showImage=false
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  // public cleanForm(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
  // }
  onClick(){
  }
}
