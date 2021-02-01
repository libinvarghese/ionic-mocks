import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { ActionSheetMock, METHODS } from './action-sheet';

describe('ActionSheetMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new ActionSheetMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
