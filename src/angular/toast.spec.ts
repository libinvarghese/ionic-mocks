import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, ToastMock } from './toast';

describe('Toast', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new ToastMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
