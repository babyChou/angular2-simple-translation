import { SimpleTranslationPage } from './app.po';

describe('simple-translation App', () => {
  let page: SimpleTranslationPage;

  beforeEach(() => {
    page = new SimpleTranslationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
