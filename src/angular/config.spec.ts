import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { ConfigMock, METHODS } from './config';

describe('Config', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new ConfigMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
