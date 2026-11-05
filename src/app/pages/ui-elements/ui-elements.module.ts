import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GoogleMapsModule } from '@angular/google-maps';

import {
  DashedLineChartComponent,
  HeatmapChartComponent,
  IconsPageComponent,
  LineChartComponent,
  PieChartComponent
} from './components';
import {
  ChartsPageComponent,
  MapPageComponent
} from './containers';
import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChartsService } from './services';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    IconsPageComponent,
    ChartsPageComponent,
    MapPageComponent,
    LineChartComponent,
    DashedLineChartComponent,
    PieChartComponent,
    HeatmapChartComponent
  ],
  imports: [
    CommonModule,
    UiElementsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    NgApexchartsModule,
    GoogleMapsModule,
    MatToolbarModule,
    SharedModule,
    DashboardModule,
  ],
  providers: [
    ChartsService
  ]
})
export class UiElementsModule { }
