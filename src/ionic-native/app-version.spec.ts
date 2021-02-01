import { AppVersionMock } from './app-version';

describe('AppVersionMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new AppVersionMock();
  });

  it('should initialize', () => {
    expect(classUnderTest).toBeDefined();
  });

  describe('getAppName', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.getAppName).toBeDefined();
    });
  });

  describe('getPackageName', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.getPackageName).toBeDefined();
    });
  });

  describe('getVersionCode', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.getVersionCode).toBeDefined();
    });
  });

  describe('getVersionNumber', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.getVersionNumber).toBeDefined();
    });
  });
});
