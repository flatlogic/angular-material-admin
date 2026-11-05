import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ChartsService } from '../../services';
import {
  DashedLineChartData,
  HeatmapChartData,
  LineChartData,
  PieChartData
} from '../../models';

@Component({
  standalone: false,
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.scss']
})
export class ChartsPageComponent {
  public lineChartData$: Observable<LineChartData>
  public dashedLineChartData$: Observable<DashedLineChartData>
  public pieChartData$: Observable<PieChartData>
  public heatmapChartData$: Observable<HeatmapChartData>

  constructor(private service: ChartsService) {
    this.lineChartData$ = this.service.loadLineChartData();
    this.dashedLineChartData$ = this.service.dashedLineChartData();
    this.pieChartData$ = this.service.loadPieChartData();
    this.heatmapChartData$ = this.service.loadHeatmapChartData();
  }
}
