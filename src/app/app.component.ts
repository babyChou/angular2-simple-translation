import { Component } from '@angular/core';
import { TranslateService } from './shared/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public translatedText: string;
  public supportedLanguages: any[];
  title = 'app works!';

  constructor(private _translate: TranslateService) {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: '华语', value: 'zh' },
    ];

    this.subscribeToLangChanged(); // subscribe to language changes

    // set language
    this._translate.setDefaultLang('en'); // set English as default
    this._translate.enableFallback(true); // enable fallback

    // set current language
    this.selectLang('es');
  }

  isCurrentLang(lang: string): boolean {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string): void {
    // set default;
    this._translate.use(lang);
    // this.refreshText();
  }

  refreshText(): void {
    this.translatedText = this._translate.instant('hello world');
  }

  subscribeToLangChanged() {
    // refresh text
    // please unsubribe during destroy
    return this._translate.onLangChanged.subscribe(x => { this.refreshText()});
  }


}
