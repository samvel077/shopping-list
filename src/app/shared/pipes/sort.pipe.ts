import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], sortBy: string, sortOrder: number): any[] {
    return sortOrder
      ? [...value].sort((a, b) => a[sortBy] - b[sortBy])
      : [...value].sort((a, b) => b[sortBy] - a[sortBy]);
  }
}
