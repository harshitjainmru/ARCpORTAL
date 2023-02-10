import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { validation } from 'src/app/constants/formValidation';
import { validationMessage } from 'src/app/constants/validatorsMessage';

@Component({
  selector: 'app-add-new-staff',
  templateUrl: './add-new-staff.component.html',
  styleUrls: ['./add-new-staff.component.scss']
})
export class AddNewStaffComponent implements OnInit {
  newStaffForm!:FormGroup;
  errorMessage:any;
  disable_btn=true

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
    this.errorMessage=validationMessage
  }

  createForm(){
    this.newStaffForm=this.fb.group({
      first_name:['',[validation.INPUT_REQUIRED,validation.NAME.NAME_LENGTH,validation.NAME.NAME_PATTERN]],
      last_name:['',[validation.INPUT_REQUIRED,validation.NAME.NAME_LENGTH,validation.NAME.NAME_PATTERN]],
      email:['',[validation.INPUT_REQUIRED,validation.EMAIL.EMAIL_email,validation.EMAIL.EMAIL_PATTERN]],

    })
  }
  onSubmit(){
    this.disable_btn=false
    if(this.newStaffForm.valid){
     this.newStaffForm.controls.first_name=this.newStaffForm.value.first_name;

    }
  }

}
