import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_FAQ } from 'src/app/constants/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  navToNewFaq(){
    this.route.navigate([ADD_FAQ.fullUrl])
  }

}
