import { AngularAnimalPyramidPage } from './app.po';

describe('angular-animal-pyramid App', () => {
  let page: AngularAnimalPyramidPage;

  beforeEach(() => {
    page = new AngularAnimalPyramidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
