import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ]
})
export class ContactsModule { }
