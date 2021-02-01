import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, PROPERTIES, StatusBarMock } from './status-bar';

describe('StatusBar', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new StatusBarMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS, PROPERTIES));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
