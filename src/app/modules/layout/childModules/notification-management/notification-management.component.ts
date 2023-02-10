import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SEND_NOTIFICATION_MANAGE } from 'src/app/constants/router';
import { notificationTable } from 'src/app/constants/tableInterface';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.scss']
})
export class NotificationManagementComponent implements OnInit {
  dataSource = new MatTableDataSource<notificationTable>();
  searchFilter=''
  filterForm!: FormGroup;
  pageSize!: number;
  heading = [
    { heading: 'Title', key:'title',type:'text',sort:true},
    { heading: 'S.No', key:'sno',type:'text',sort:true},
    { heading: 'Description', key:'description',type:'text'},
    { heading: 'Sent On', key:'sentOn',type:'text',sort:true},
    { heading: 'Action', key: 'status', type: 'action', action: [4] }

  ]
  Table_DATA: any[] = [
    {'sno': 2, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 1, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 3, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 4, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 5, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 6, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 7, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 8, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 9, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 10, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 2, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 1, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 3, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 4, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 5, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 6, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 7, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 8, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 9, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},
    {'sno': 10, "title":'Terms of Use','description':'Lorem Ipsum','sentOn':'04/03/1996,3:30 PM'},

  ];
  constructor(private route:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
    this.dataSource = new MatTableDataSource<notificationTable>(this.Table_DATA);

  }
  createForm(){
    this.filterForm=this.fb.group({
      search:[''],
      showRow: [''],
      userType:['']
    })
  }
  navToSend(){
    this.route.navigate([SEND_NOTIFICATION_MANAGE.fullUrl])
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
