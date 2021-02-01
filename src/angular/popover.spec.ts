import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, PopoverMock } from './popover';

describe('Popover', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new PopoverMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
