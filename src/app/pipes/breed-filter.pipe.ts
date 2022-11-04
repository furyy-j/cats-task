import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'breedFilterPipe'
})
export class BreedFilterPipe implements PipeTransform {
  transform(data: Array<any>, text: string): Array<any> {
    const filteredData = data.filter(item => item.name.toLowerCase().includes(text));
    return filteredData;
  }
}  
