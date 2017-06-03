import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from './translate';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [],
  exports : [CommonModule, TranslateModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...TranslateModule.forRoot().providers]
    };
  }
}
