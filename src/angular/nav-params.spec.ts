import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, NavParamsMock } from './nav-params';

describe('NavParams', () => {
  let classUnderTest;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new NavParamsMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    it('should return undefined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.get()).toBeUndefined();
    });
  });

  describe('WHEN initialized with Modal', () => {
    it('should return provided value', () => {
      const expected = { key: 'val' };
      classUnderTest = new NavParamsMock(expected);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = classUnderTest.get('key') as string;
      expect(result).toBe(expected.key);
    });
  });
});
