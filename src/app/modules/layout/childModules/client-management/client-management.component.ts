import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { clientTable } from 'src/app/constants/tableInterface';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent implements OnInit {
searchFilter=''
filterForm!: FormGroup;
pageSize!: number;
dataSource = new MatTableDataSource<clientTable>();

  heading = [
    { heading: 'Client ID', key:'clientId',type:'text',sort:true},
    { heading: 'First Name', key:'fName',type:'link',link:'client-detail' ,sort:true},
    { heading: 'Middle Name', key:'mName',type:'text'},
    { heading: 'Last Name', key:'lName',type:'text'},
    { heading: 'Email Address', key:'email',type:'text'},
    { heading: 'Mobile Number', key:'number',type:'text'},
    { heading: 'Case Status', key:'caseStatus',type:'text',},
    { heading: 'Status', key:'status',type:'text',sort:true},
    { heading: 'Action', key: 'status', type: 'action', action: [1, 2, 3] }
  ]
  Table_DATA: any[] = [
    {'clientId': 12345, 'fName': 'Martin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},
    {'clientId': 1234, 'fName': 'Martin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},
    {'clientId': 12345, 'fName': 'Martin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},
    {'clientId': 32555, 'fName': 'Marin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},
    {'clientId': 13345, 'fName': 'Martin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},
    {'clientId': 32345, 'fName': 'Martin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},
    {'clientId': 12345, 'fName': 'Martin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},
    {'clientId': 32345, 'fName': 'Martin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},
    {'clientId': 32345, 'fName': 'Martin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},
    {'clientId': 32345, 'fName': 'Martin', 'mName':'James', 'lName': 'Brown', 'email': 'Mbrown@xyz.com','number':"+660 12345",'caseStatus':"In Progress", 'status':'Active'},



  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.dataSource = new MatTableDataSource<clientTable>(this.Table_DATA);
  }
  getUserData(e:any){

  }

  createForm() {
    this.filterForm = this.fb.group({
      search: [''],
      showRow: [''],
      clientType: ['']
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
