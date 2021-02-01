import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { KeyboardMock, METHODS } from './keyboard';

describe('Keyboard', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new KeyboardMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
