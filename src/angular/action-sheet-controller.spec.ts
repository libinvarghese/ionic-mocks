import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { ActionSheetControllerMock, METHODS } from './action-sheet-controller';
import { ActionSheetMock } from './action-sheet';

describe('ActionSheetControllerMock', () => {
  let classUnderTest;

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as ActionSheetMock;

      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(ActionSheetMock);
    });
  });

  describe('WHEN initialized with ActionSheet', () => {
    it('should return passed ActionSheet', async () => {
      const actionSheet = new ActionSheetMock();
      classUnderTest = new ActionSheetControllerMock(actionSheet);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as ActionSheetMock;

      expect(result).toBe(actionSheet);
    });
  });
});
