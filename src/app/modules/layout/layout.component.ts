import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { delay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver, private router: Router) {
    console.log('layout Loading');

  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1300px)'])
      .pipe(delay(1))
      .subscribe((res:any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        // untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
  ngOnInit(): void {
  }
  // Declaration
  button : any = 'button1';
  button1 : any;
  button2 : any;

  // Function
  onClick(check:any){
    console.log(check);
        if(check==1){
          this.button = 'button1';
        }
        // }else{
        //   this.button = 'button2';
        // }
    }
}

