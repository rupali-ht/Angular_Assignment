import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  title = 'bar-chart';
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ["20-12-2020", "12-04-2020", "01-01-2020", "25-10-2020", "02-09-2020","11-11-2020","21-12-2020","13-07-2021","23-12-2020"];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins:any = {'backgroundColor': [
    "#FF6384",
 "#4BC0C0",
 "#FFCE56",
 "#E7E9ED",
 "#36A2EB"
 ]}
 public barChartColors: Color[] = [
  { backgroundColor: '#480ac9' },
]

  barChartData: ChartDataSets[] = [
    { data: [80, 100, 45, 105, 80, 100 ,140,50,100,95,120], label: 'Status' }
  ];
}