import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, PlatformMock } from './platform';

describe('PlatformMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new PlatformMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
