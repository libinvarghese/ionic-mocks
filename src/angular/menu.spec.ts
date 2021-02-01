import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, MenuMock, PROPERTIES } from './menu';

describe('Menu', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new MenuMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS, PROPERTIES));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
