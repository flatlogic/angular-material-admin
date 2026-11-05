import { Component, Input } from '@angular/core';

import { VisitsChartData } from '../../models';
import { colors } from '../../../../consts';

@Component({
  standalone: false,
  selector: 'app-visits-chart',
  templateUrl: './visits-chart.component.html',
  styleUrls: ['./visits-chart.component.scss']
})
export class VisitsChartComponent {
  @Input() visitsChartData: VisitsChartData;
  public colors: typeof colors = colors;
}
