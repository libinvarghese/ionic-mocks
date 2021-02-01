import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { LoadingMock, METHODS } from './loading';

describe('LoadingMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new LoadingMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
