import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { InfiniteScrollMock, METHODS } from './inifinite-scroll';

describe('InfiniteScroll', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new InfiniteScrollMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
