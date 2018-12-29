import { StudentsListPage } from './app.po';

describe('students-list App', function() {
  let page: StudentsListPage;

  beforeEach(() => {
    page = new StudentsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
