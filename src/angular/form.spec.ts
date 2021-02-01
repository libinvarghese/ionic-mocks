import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { FormMock, METHODS } from './form';

describe('Form', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new FormMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
