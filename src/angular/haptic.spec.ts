import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { HapticMock, METHODS } from './haptic';

describe('Haptic', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new HapticMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
