import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN } from 'src/app/constants/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    public _router:Router
  ) {
    console.log('account loading');

   }

  ngOnInit(): void {
  }
 click(){
   this._router.navigate([LOGIN.baseUrl])
 }

}
