import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, NavControllerMock, PROPERTIES } from './nav-controller';

describe('NavControllerMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new NavControllerMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS, PROPERTIES));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
