import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { ItemSlidingMock, METHODS } from './item-sliding';

describe('ItemSliding', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new ItemSlidingMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
