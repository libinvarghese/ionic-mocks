import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, ThreeDeeTouchMock } from './three-dee-touch';

describe('ThreeDeeTouch', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new ThreeDeeTouchMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });

  describe('watchForTouches', () => {
    it('should return Observable Object', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.watchForTouches().subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });

  describe('onHomeIconPressed', () => {
    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.onHomeIconPressed().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });
});
