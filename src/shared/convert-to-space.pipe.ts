import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
// tslint:disable-next-line:class-name
export class convertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }

}
