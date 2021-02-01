import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { AlertControllerMock, METHODS } from './alert-controller';
import { AlertMock } from './alert';

describe('AlertControllerMock', () => {
  let classUnderTest;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new AlertControllerMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    it('should return an Alert', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as AlertMock;

      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(AlertMock);
    });
  });

  describe('WHEN initialized with Alert', () => {
    it('should return passed Alert', async () => {
      const alert = new AlertMock();
      classUnderTest = new AlertControllerMock(alert);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as AlertMock;

      expect(result).toBe(alert);
    });
  });
});
