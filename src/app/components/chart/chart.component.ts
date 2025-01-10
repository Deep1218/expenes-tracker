import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  input,
  OnInit,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Chart, { ChartData, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements AfterViewInit, OnInit {
  isBrowser!: boolean;
  @ViewChild('chart_canvas', { read: ElementRef })
  chartCanvas!: ElementRef;

  type = input<ChartType>('bar');
  chartData!: ChartData;
  chart!: Chart<ChartType>;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['type'].firstChange) {
      this.chart.destroy();
      this.setChartData();
      this.setChart();
    }
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.setChartData();
  }

  ngAfterViewInit(): void {
    this.setChart();
  }
  setChart() {
    if (this.chartCanvas) {
      this.chart = new Chart(this.chartCanvas.nativeElement, {
        type: this.type(),
        data: this.chartData,
      });
    }
    // console.log(this.chart);
  }
  setChartData() {
    switch (this.type()) {
      case 'bar':
        const data = [
          { year: 2010, count: 10 },
          { year: 2011, count: 20 },
          { year: 2012, count: 15 },
          { year: 2013, count: 25 },
          { year: 2014, count: 22 },
          { year: 2015, count: 30 },
          { year: 2016, count: 28 },
        ];
        this.chartData = {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count),
            },
          ],
        };
        break;
      case 'doughnut':
        this.chartData = {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
              ],
              hoverOffset: 4,
            },
          ],
        };
    }
  }
}
