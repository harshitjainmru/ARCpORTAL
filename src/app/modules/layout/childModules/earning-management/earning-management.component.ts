import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { earningTable } from 'src/app/constants/tableInterface';

@Component({
  selector: 'app-earning-management',
  templateUrl: './earning-management.component.html',
  styleUrls: ['./earning-management.component.scss']
})
export class EarningManagementComponent implements OnInit {
  searchFilter=''
  filterForm!: FormGroup;
  pageSize!: number;
  dataSource = new MatTableDataSource<earningTable>();
  heading = [
    { heading: 'S.No', key:'sno',type:'text',sort:true},
    { heading: 'User ID', key:'userID',type:'text',sort:true},
    { heading: 'First Name', key:'fName',type:'link',link:'/client-management/client-detail'},
    { heading: 'Last Name', key:'lName',type:'text'},
    { heading: 'Email', key:'email',type:'text'},
    { heading: 'Mobile No.', key:'number',type:'text'},
    { heading: 'Transaction Status', key:'transactionStatus',type:'text'},
    { heading: 'Amount Paid', key:'amountPaid',type:'text',sort:true},
    { heading: 'Date & Time', key: 'status', type: 'text', sort:true}

  ]
  Table_DATA: any[] = [
    {'sno': 1, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Failed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},
    {'sno': 2, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Failed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},
    {'sno': 3, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Completed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},
    {'sno': 4, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Failed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},
    {'sno': 5, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Failed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},
    {'sno': 6, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Completed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},
    {'sno': 7, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Failed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},
    {'sno': 8, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Failed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},
    {'sno': 9, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Completed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},
    {'sno': 10, 'userID': 12345, 'fName':'Martin','email':'m@gmail.com', 'lName': 'Brown', 'number': '768-457-4567','transactionStatus':'Failed','amountPaid':"$20",'status':"Apr 21,2020 00:39:14"},


  ];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
    this.dataSource = new MatTableDataSource<earningTable>(this.Table_DATA);

  }
  createForm() {
    this.filterForm = this.fb.group({
      search: [''],
      showRow: [''],
      sort: [''],
      status: ['']
    })
  }
  resetFilter() {
    console.log('reset in clnt');

    this.filterForm.reset();
    this.dataSource.filter = '';
  }
  applyFilter(event: any) {
    console.log('apl fltr in clnt');

    this.pageSize = event.controls.showRow.value;
    if (event.controls.search.value) {
      const filterValue = event.controls.search.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      // console.log(event,"Apply Filterrrr!",this.pageSize);
    } else {
      this.dataSource.filter = '';
    }
  }
}
