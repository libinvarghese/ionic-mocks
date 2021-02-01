import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { KeyboardMock, METHODS } from './keyboard';

describe('Keyboard', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new KeyboardMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });

  describe('onKeyboardShow', () => {
    it('should return empty Observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.onKeyboardShow().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('onKeyboardHide', () => {
    it('should return empty Observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.onKeyboardHide().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });
});
