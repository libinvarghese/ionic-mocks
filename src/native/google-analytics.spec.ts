import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { GoogleAnalyticsMock, METHODS } from './google-analytics';

describe('GoogleAnalytics', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new GoogleAnalyticsMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
