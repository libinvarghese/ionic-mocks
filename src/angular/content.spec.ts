import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { ContentMock, METHODS, PROPERTIES } from './content';

describe('Content', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new ContentMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS, PROPERTIES));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
