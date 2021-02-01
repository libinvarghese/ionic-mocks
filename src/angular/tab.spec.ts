import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, TabMock } from './tab';

describe('Tab', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new TabMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
