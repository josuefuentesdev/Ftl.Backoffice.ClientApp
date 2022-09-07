import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-funnel-chart',
  template: `<div echarts [options]="options" class="echart"></div>`,
  styles: [
  ]
})
export class FunnelChartComponent implements AfterViewInit, OnInit {

  options: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.options = {
      title: {
        text: 'Sales funnel'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          restore: {
            title : 'Restore'
          },
        }
      },
      legend: {
        data: ['Visit', 'Lead', 'Consider', 'Order']
      },
      series: [
        {
          name: 'Funnel',
          type: 'funnel',
          left: '10%',
          top: 60,
          bottom: 60,
          width: '80%',
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside'
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: 20
            }
          },
          data: [
            { value: 100, name: 'Visit' },
            { value: 60, name: 'Lead' },
            { value: 30, name: 'Consider' },
            { value: 10, name: 'Order' }
          ]
        }
      ]
    };
  }

}
