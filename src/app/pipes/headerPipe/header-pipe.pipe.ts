import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headerPipe',
})
export class HeaderPipePipe implements PipeTransform {
  transform(value: any) {
    let header= value.split('/');
    let headerValue=header.replaceall('-','')
    return headerValue;

  }
}
