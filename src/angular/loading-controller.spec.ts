import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { LoadingControllerMock, METHODS } from './loading-controller';
import { LoadingMock } from './loading';

describe('LoadingControllerMock', () => {
  let classUnderTest;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new LoadingControllerMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    it('should return an Loading', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as LoadingMock;
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(LoadingMock);
    });
  });

  describe('WHEN initialized with Loading', () => {
    it('should return passed Loading', async () => {
      const loading = new LoadingMock();
      classUnderTest = new LoadingControllerMock(loading);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as LoadingMock;
      expect(result).toBe(loading);
    });
  });
});
