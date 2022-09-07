import { Component, OnDestroy } from '@angular/core';
import { ProgressInfo } from '../../../@core/data/stats-progress-bar';
import { takeWhile } from 'rxjs/operators';
import { OrdersService } from '../../../../libs/api-client';

@Component({
  selector: 'ngx-progress-section',
  styleUrls: ['./progress-section.component.scss'],
  templateUrl: './progress-section.component.html',
})
export class DashboardProgressSectionComponent implements OnDestroy {

  private alive = true;

  progressInfoData: ProgressInfo[];

  constructor(private orderService: OrdersService) {
    const now = new Date();
    const dayOfWeek = now.getDay();
    let startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOfWeek)
    let startDate = startOfWeek.toISOString()

    orderService.getOrdersStats(startDate, now.toISOString()).pipe(takeWhile(() => this.alive)).subscribe(
      stats => {
        this.progressInfoData = [];
        this.progressInfoData.push({
          title: 'Total Orders',
          value: stats.count,
          activeProgress: (stats.count / (100) ) * 100,
          description: `This week, from the target of 100 orders`,
        });
        this.progressInfoData.push({
          title: 'Total Revenue',
          value: stats.revenue,
          activeProgress: (stats.revenue / (5 * 1000)) * 100,
          description: `This week, from the target of 5k`,
        });
        let lastOrderDate = Date.parse(stats.lastOrder)
        let minutesSinceLastOrder = ~~((now.getTime() - lastOrderDate) / (1000 * 60));
        this.progressInfoData.push({
          title: 'Minutes since last order',
          value: minutesSinceLastOrder,
          activeProgress: (minutesSinceLastOrder / (720) ) * 100,
          description: `This week, from the maximum of 720 minutos`,
        });
      },
      error => {
        if (error.status === 404) {
          this.progressInfoData = [];
          this.progressInfoData.push({
            title: 'Total Orders',
            value: 0,
            activeProgress: 0,
            description: `This week, from the target of 100 orders`,
          });
          this.progressInfoData.push({
            title: 'Total Revenue',
            value: 0,
            activeProgress: 0,
            description: `This week, from the target of 5k`,
          });
          this.progressInfoData.push({
            title: 'Minutes since last order',
            value: 0,
            activeProgress: 0,
            description: `This week, from the maximum of 720 minutes`,
          })
        }
      });
  }

  ngOnDestroy() {
    this.alive = true;
  }
}
