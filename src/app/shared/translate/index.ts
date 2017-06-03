import { NgModule, ModuleWithProviders } from '@angular/core';

import { TranslateService } from './translate.service';
import { TRANSLATION_PROVIDERS } from './translation.assembly';
import { TranslatePipe } from './translate.pipe';

export * from './translate.service';
export * from './translation.assembly';
export * from './translate.pipe';


@NgModule({
  declarations: [TranslatePipe],
  exports : [TranslatePipe]
})



export class TranslateModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TranslateModule,
      providers: [TRANSLATION_PROVIDERS, TranslateService]
    };
  }

  static forChild(): ModuleWithProviders {
      return {
          ngModule: TranslateModule,
          providers: [TRANSLATION_PROVIDERS, TranslateService]
      };
  }

}
