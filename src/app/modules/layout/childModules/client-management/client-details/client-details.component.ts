import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { clientDetailTable } from 'src/app/constants/tableInterface';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  breakpoint:any;
  url:any = '';
  showImage:boolean=true
  dataSource = new MatTableDataSource<clientDetailTable>();

  heading = [
    { heading: 'S.No.', key:'sno',type:'text'},
    { heading: 'Transaction ID', key:'transactionId',type:'text',sort:true},
    { heading: 'Amount', key:'Amount',type:'text',sort:true},
    { heading: 'Date & Time', key:'dateTime',type:'text',sort:true},
  ]
  Table_DATA: any[] = [
    {'sno':1,'transactionId':'#JKKJ31','Amount':'$200','dateTime':'04/03/1996, 3:30 PM'},
    {'sno':2,'transactionId':'#JKKJ31','Amount':'$200','dateTime':'04/03/1996, 3:30 PM'},
    {'sno':3,'transactionId':'#JKKJ31','Amount':'$200','dateTime':'04/03/1996, 3:30 PM'},
    {'sno':4,'transactionId':'#JKKJ31','Amount':'$200','dateTime':'04/03/1996, 3:30 PM'},
    {'sno':5,'transactionId':'#JKKJ31','Amount':'$200','dateTime':'04/03/1996, 3:30 PM'},
    {'sno':6,'transactionId':'#JKKJ31','Amount':'$200','dateTime':'04/03/1996, 3:30 PM'},
    {'sno':7,'transactionId':'#JKKJ31','Amount':'$200','dateTime':'04/03/1996, 3:30 PM'},
    {'sno':8,'transactionId':'#JKKJ31','Amount':'$200','dateTime':'04/03/1996, 3:30 PM'},
    {'sno':9,'transactionId':'#JKKJ31','Amount':'$200','dateTime':'04/03/1996, 3:30 PM'},
  ]
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 850) ? 1 : 2;
    this.dataSource = new MatTableDataSource<clientDetailTable>(this.Table_DATA);

  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 850) ? 1 : 2;
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
  onFileChange(event: any) {
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    if (file) {
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        return;
      }
      reader.readAsDataURL(file);
    }
  }
  uploadFile(event: any) {
    console.log(event,"file upload!!!!");
  }
}
