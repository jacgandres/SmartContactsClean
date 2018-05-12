import { Pipe, PipeTransform } from '@angular/core';
 
 
@Pipe({
  name: 'FotoPipe',
})
export class FotoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any) {
    
    if (value!=null && value.photos != null) {
      return value.photos[0].value;
    }
    else {
      return "../assets/imgs/nofoto.PNG"
    }
  }
}
