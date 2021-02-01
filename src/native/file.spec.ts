import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { FileMock, METHODS, PROPERTIES } from './file';

describe('FileMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new FileMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS, PROPERTIES));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
