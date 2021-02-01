import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { EventsMock, METHODS } from './events';

describe('events', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new EventsMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
