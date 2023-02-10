import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDialogService } from 'src/app/components/common-dialog/dialogService/common-dialog.service';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.scss'],
})
export class AddFaqComponent implements OnInit {
  myForm!: FormGroup;
  spinner:boolean=true
  constructor(private fb: FormBuilder, private dialogService: CommonDialogService) { }

  ngOnInit(): void {
    this.spinner=false
    this.makeForm();
  }
  makeForm() {
    this.myForm = this.fb.group({
      body: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
    });
  }
  handleClick() {
    const options = {
      title: 'Add FAQ?',
      message: 'Are you sure want to add this FAQ?',
      cancelText: 'No',
      confirmText: 'Yes'
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        // this.saveData();
      }
    });
  }
}

