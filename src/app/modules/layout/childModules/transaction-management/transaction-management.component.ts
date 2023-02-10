import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { transactionTable } from 'src/app/constants/tableInterface';

@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.scss'],
})
export class TransactionManagementComponent implements OnInit {
  searchFilter = '';
  filterForm!: FormGroup;
  pageSize!: number;
  dataSource = new MatTableDataSource<transactionTable>();
  heading = [
    { heading: 'S.No', key: 'sno', type: 'text', sort: true },
    {
      heading: 'Transaction ID',
      key: 'transactionID',
      type: 'text',
      sort: true,
    },
    { heading: 'First Name', key: 'fName', type: 'link', link: '' },
    { heading: 'Last Name', key: 'lName', type: 'text' },
    { heading: 'Date of Payment', key: 'dateOfPayment', type: 'text' },
    { heading: 'Amount Paid', key: 'amountPaid', type: 'text' },
    { heading: 'Status', key: 'status', type: 'text', sort: true },
  ];
  Table_DATA: any[] = [
    {
      sno: 1,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Failed',
    },
    {
      sno: 2,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Completed',
    },
    {
      sno: 3,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Failed',
    },
    {
      sno: 4,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Completed',
    },
    {
      sno: 5,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Failed',
    },
    {
      sno: 6,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Completed',
    },
    {
      sno: 7,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Failed',
    },
    {
      sno: 8,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Completed',
    },
    {
      sno: 9,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Completed',
    },
    {
      sno: 10,
      transactionID: 12345,
      fName: 'Martin',
      lName: 'Brown',
      dateOfPayment: '15/05/2022',
      amountPaid: '$20',
      status: 'Completed',
    },
  ];
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.createForm()
    this.dataSource = new MatTableDataSource<transactionTable>(this.Table_DATA);
  }
  createForm(){
    this.filterForm=this.fb.group({
      search:[''],
      showRow:[''],
      addedOn:[''],
      dateTo:[''],
      status:['']

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
