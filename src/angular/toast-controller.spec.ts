import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, ToastControllerMock } from './toast-controller';
import { ToastMock } from './toast';

describe('ToastControllerMock', () => {
  let classUnderTest;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new ToastControllerMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    it('should return an Toast', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as ToastMock;
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(ToastMock);
    });
  });

  describe('WHEN initialized with Toast', () => {
    it('should return passed Toast', async () => {
      const toast = new ToastMock();
      classUnderTest = new ToastControllerMock(toast);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as ToastMock;
      expect(result).toBe(toast);
    });
  });
});
