import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TablesService } from '../../services';
import { Customer, Employee } from '../../models';

@Component({
  standalone: false,
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss']
})
export class TablesPageComponent {
  public employeeTableData$: Observable<Employee[]>
  public materialTableData$: Observable<Customer[]>

  constructor(private service: TablesService) {
    this.employeeTableData$ = service.loadEmployeeTableData();
    this.materialTableData$ = service.loadMaterialTableData();
  }
}
