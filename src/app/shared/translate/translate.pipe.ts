import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service'; // our translate service


@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private _translate: TranslateService) { }

  transform(value: string, args: any[] | string[]): any {
    if (!value) {
      return false;
    };

    return this._translate.instant(value, args); // pass in args
  }

}
