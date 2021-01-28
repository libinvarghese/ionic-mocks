import { ActionSheetMock, METHODS } from './action-sheet';
import { mockObjectCustomMatchers } from '../spec/custom-matchers';

describe('ActionSheetMock', () => {
  let classUnderTest: any;

  beforeEach(() => {
    classUnderTest = new ActionSheetMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
