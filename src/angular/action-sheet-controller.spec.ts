import { ActionSheetControllerMock, METHODS } from './action-sheet-controller';
import { ActionSheetMock } from './action-sheet';
import { mockObjectCustomMatchers } from '../spec/custom-matchers';

describe('ActionSheetControllerMock', () => {
  let classUnderTest: any;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new ActionSheetControllerMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    it('should return an ActionSheet', async () => {
      const result = await classUnderTest.create();
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(ActionSheetMock);
    });
  });

  describe('WHEN initialized with ActionSheet', () => {
    it('should return passed ActionSheet', async () => {
      const actionSheet = new ActionSheetMock();
      classUnderTest = new ActionSheetControllerMock(actionSheet);

      const result = await classUnderTest.create();
      expect(result).toBe(actionSheet);
    });
  });
});
