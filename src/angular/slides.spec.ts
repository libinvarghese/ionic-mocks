import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, SlidesMock } from './slides';

describe('Slides', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new SlidesMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
