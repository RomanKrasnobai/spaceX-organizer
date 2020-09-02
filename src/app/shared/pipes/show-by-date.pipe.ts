import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showByDate'
})
export class ShowByDatePipe implements PipeTransform {

  transform(values: any, args: any) {
    return args ? values?.filter(data => data?.first_flight === args) : values;
  }

}
