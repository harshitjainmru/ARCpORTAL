import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { NEW_STAFF_MANAGE } from 'src/app/constants/router';
import { staffTable } from 'src/app/constants/tableInterface';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.scss']
})
export class StaffManagementComponent implements OnInit {
  dataSource = new MatTableDataSource<staffTable>();

  heading = [
    { heading: 'S.No', key:'sno',type:'text',sort:true},
    { heading: 'First Name', key:'fName',type:'link',link:'', sort:true},
    { heading: 'Last Name', key:'lName',type:'text'},
    { heading: 'Email', key:'email',type:'text'},
    { heading: 'Status', key:'status',type:'text',sort:true},
    { heading: 'Action', key: 'status', type: 'action', action: [3,4] }
  ]
  Table_DATA: any[] = [
    {'sno': 1, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 2, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 3, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 4, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 5, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 6, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 7, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 8, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 9, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 10, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 10, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 10, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},
    {'sno': 10, 'fName': 'Harshit', 'lName': 'Jain', 'email': 'harsh@gmail.com','status':"Active"},



  ];
  constructor(private route:Router,private _filter:FilterService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<staffTable>(this.Table_DATA);

  }
  navToNewSTAFF(){
    this.route.navigate([NEW_STAFF_MANAGE.fullUrl])
  }
  // constructor(
  //   private _filter:FilterService
  // ) { }
  @ViewChild('search') search!:ElementRef

  ngAfterViewInit(): void {
    const searchTerm = fromEvent<any>(this.search.nativeElement, 'keyup').pipe(
      map(event => event.target.value)
    )
    searchTerm.subscribe((response:any) =>{
      this._filter.searchKey$.next(response)
    })
  }
}
