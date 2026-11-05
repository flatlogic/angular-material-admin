import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  standalone: false,
  name: 'year'
})
export class YearPipe extends DatePipe implements PipeTransform {
  transform(date: Date): any {
    return super.transform(date, 'y');
  }
}
