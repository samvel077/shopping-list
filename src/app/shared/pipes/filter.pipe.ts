import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterBy: string, filterValue: string | null): any[] {
    return value.filter((el) =>
      el[filterBy].toLowerCase().includes(filterValue?.toLowerCase())
    );
  }
}
