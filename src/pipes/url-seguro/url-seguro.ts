import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl
} from '@angular/platform-browser';


@Pipe({
  name: 'urlSeguro',
})
export class UrlSeguroPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    var result: any = {};
    if(value)
    {  
        let img = value[0].value.toString();
        console.log(img);
        switch (type) {
          case 'html': result = this.sanitizer.bypassSecurityTrustHtml(value); break;
          case 'style': result = this.sanitizer.bypassSecurityTrustStyle(value); break;
          case 'script': result = this.sanitizer.bypassSecurityTrustScript(value); break;
          case 'url': result = this.sanitizer.bypassSecurityTrustUrl(img); break;
          case 'resourceUrl': result = this.sanitizer.bypassSecurityTrustResourceUrl(img); break;
          default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
    else{
      result = './assets/imgs/nophoto.png';
    }
    console.log(JSON.stringify(result));
    return result;
  }

}
