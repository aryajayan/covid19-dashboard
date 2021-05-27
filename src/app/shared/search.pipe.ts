import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../dashboard/country.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    items: Country[],
    searchText: string,
    filterMetadata: any
  ): Country[] {
    filterMetadata.count = items.length;
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    let filtered = items.filter((a) =>
      a.country.toLowerCase().includes(searchText.toLowerCase())
    );
    filterMetadata.count = filtered.length;
    return filtered;
  }
}
