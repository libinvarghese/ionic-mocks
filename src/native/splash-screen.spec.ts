import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, SplashScreenMock } from './splash-screen';

describe('SplashScreen', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new SplashScreenMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
