import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, PopoverControllerMock } from './popover-controller';
import { PopoverMock } from './popover';

describe('PopoverControllerMock', () => {
  let classUnderTest;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new PopoverControllerMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    it('should return an Popover', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as PopoverMock;
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(PopoverMock);
    });
  });

  describe('WHEN initialized with Popover', () => {
    it('should return passed Popover', async () => {
      const popover = new PopoverMock();
      classUnderTest = new PopoverControllerMock(popover);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as PopoverMock;
      expect(result).toBe(popover);
    });
  });
});
