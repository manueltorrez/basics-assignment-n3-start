import { BasicsAssignmentN3StartPage } from './app.po';

describe('basics-assignment-n3-start App', () => {
  let page: BasicsAssignmentN3StartPage;

  beforeEach(() => {
    page = new BasicsAssignmentN3StartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
