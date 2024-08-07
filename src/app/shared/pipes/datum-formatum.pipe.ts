import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datumFormatum'
})
export class DatumFormatumPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let tzoffset:any = (new Date(value)).getTimezoneOffset() * 60000;
    let minoffset = new Date(value).getTime() - tzoffset;
    let localISOtime = (new Date(minoffset)).toISOString().replace('Z', '').replace('T', ' ');
    return localISOtime;
  }

}
