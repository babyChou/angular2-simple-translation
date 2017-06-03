import { InjectionToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from '../../../locale/lang-en';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from '../../../locale/lang-zh';

// translation token
export const TRANSLATIONS = new InjectionToken('translations');

// all traslations

const dictionary = {
  /*[LANG_EN_NAME] : LANG_EN_TRANS,
  [LANG_ZH_NAME] : LANG_ZH_TRANS,*/
};

/*
  AoT not support ES6 property-accessors
  https://github.com/rangle/angular-2-aot-sandbox#property-accessors-top
*/
dictionary[LANG_EN_NAME] = LANG_EN_TRANS;
dictionary[LANG_ZH_NAME] = LANG_ZH_TRANS;

// providers
export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: dictionary }
];
