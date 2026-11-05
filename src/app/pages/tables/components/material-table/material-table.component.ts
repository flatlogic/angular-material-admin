import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../../models';

@Component({
  standalone: false,
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  @Input() materialTableDate: Customer[];
  public displayedColumns: string[] = ['name', 'email', 'product', 'price', 'date', 'city', 'status'];
  public dataSource: Customer[];

  public ngOnInit() {
    this.dataSource = this.materialTableDate;
  }
}
