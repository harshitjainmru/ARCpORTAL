import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_FAQ } from 'src/app/constants/router';
import { ContentManagementComponent } from './content-management.component';

const routes: Routes = [
  {path:'',component:ContentManagementComponent},
  {path:ADD_FAQ.baseUrl,loadChildren:()=>import('./add-faq/add-faq.module').then(m=>m.AddFaqModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagementRoutingModule { }
