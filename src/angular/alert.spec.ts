import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { AlertMock, METHODS } from './alert';

describe('AlertMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new AlertMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
