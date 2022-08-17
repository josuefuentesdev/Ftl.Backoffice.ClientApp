import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule, NbListModule, NbRouteTabsetModule, NbTabsetModule } from '@nebular/theme';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactsTableComponent,
    ContactDetailComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    NbTabsetModule,
    NbCardModule,
    NbRouteTabsetModule,
    Ng2SmartTableModule,
    NbListModule
  ]
})
export class ContactsModule { }
