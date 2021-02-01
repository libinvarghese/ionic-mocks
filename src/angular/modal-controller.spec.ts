import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { ModalControllerMock, METHODS } from './modal-controller';
import { ModalMock } from './modal';

describe('ModalControllerMock', () => {
  let classUnderTest;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new ModalControllerMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    it('should return an Modal', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as ModalMock;
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(ModalMock);
    });
  });

  describe('WHEN initialized with Modal', () => {
    it('should return passed Modal', async () => {
      const modal = new ModalMock();
      classUnderTest = new ModalControllerMock(modal);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = (await classUnderTest.create()) as ModalMock;
      expect(result).toBe(modal);
    });
  });
});
