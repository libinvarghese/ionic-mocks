import { AppRateMock } from './app-rate';

describe('AppRateMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new AppRateMock();
  });

  it('should initialize', () => {
    expect(classUnderTest).toBeDefined();
  });

  it('should contain preferences', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(classUnderTest.preferences).toBeDefined();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(classUnderTest.preferences.storeAppURL).toBeDefined();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(classUnderTest.preferences.callbacks).toBeDefined();
  });

  describe('promptForRating', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.promptForRating).toBeDefined();
    });
  });

  describe('navigateToAppStore', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.navigateToAppStore).toBeDefined();
    });
  });
});
