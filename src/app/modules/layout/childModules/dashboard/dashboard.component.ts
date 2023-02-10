import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { dashboardTable } from 'src/app/constants/tableInterface';
import { FilterService } from 'src/app/services/filter.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit , AfterViewInit {
  dataSource = new MatTableDataSource<dashboardTable>();



  heading = [
    { heading: 'S.No', key:'sno',type:'text',sort:true},
    { heading: 'First Name', key:'fName',type:'link',link:'/dashboard',sort:true},
    { heading: 'Middle Name', key:'mName',type:'text'},
    { heading: 'Last Name', key:'lName',type:'text'},
    { heading: 'Email', key:'email',type:'text'},
    { heading: 'Phone', key:'phone',type:'text'},
    { heading: 'Registered On', key:'registeredOn',type:'text',sort:true},
  ]
  Table_DATA: any[] = [
    {'sno': 2, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 1, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 3, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 4, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"2/5/2022"},
    {'sno': 5, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/3/2022"},
    {'sno': 6, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 7, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 8, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 9, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/4/2022"},
    {'sno': 10, 'fName': 'Harsh', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 11, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 12, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 13, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 14, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"2/5/2022"},
    {'sno': 15, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/3/2022"},
    {'sno': 16, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 17, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 18, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 19, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/4/2022"},
    {'sno': 10, 'fName': 'Harsh', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 22, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 21, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 23, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 24, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"2/5/2022"},
    {'sno': 25, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/3/2022"},
    {'sno': 26, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 27, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 8, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 9, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/4/2022"},
    {'sno': 10, 'fName': 'Harsh', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 32, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 31, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 33, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 34, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"2/5/2022"},
    {'sno': 35, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/3/2022"},
    {'sno': 36, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 37, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 38, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 39, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/4/2022"},
    {'sno': 10, 'fName': 'Harsh', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 42, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 41, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 43, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 44, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"2/5/2022"},
    {'sno': 45, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/3/2022"},
    {'sno': 46, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 47, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},
    {'sno': 48, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"1/5/2022"},
    {'sno': 49, 'fName': 'Harshit', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/4/2022"},
    {'sno': 10, 'fName': 'Harsh', 'mName':'Kumar', 'lName': 'Jain', 'email': 'harsh@gmail.com','phone':"+867-876-9898",'registeredOn':"21/5/2022"},

  ];

  constructor(
    private _filter:FilterService
  ) { }
  @ViewChild('search') search!:ElementRef
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<dashboardTable>(this.Table_DATA);

  }
  ngAfterViewInit(): void {
    const searchTerm = fromEvent<any>(this.search.nativeElement, 'keyup').pipe(
      map(event => event.target.value)
    )
    searchTerm.subscribe((response:any) =>{
      this._filter.searchKey$.next(response)
    })
  }
}
