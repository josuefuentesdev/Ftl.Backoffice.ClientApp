import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { FunnelChartComponent } from './charts/funnel-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [
    ContactsComponent,
    FunnelChartComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ]
})
export class ContactsModule { }
