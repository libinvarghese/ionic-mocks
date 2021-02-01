import { CodePushMock } from './code-push';

describe('CodePushMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new CodePushMock();
  });

  it('should initialize', () => {
    expect(classUnderTest).toBeDefined();
  });

  describe('getCurrentPackage', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.getCurrentPackage).toBeDefined();
    });
  });

  describe('getPendingPackage', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.getPendingPackage).toBeDefined();
    });
  });

  describe('checkForUpdate', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.checkForUpdate).toBeDefined();
    });
  });

  describe('notifyApplicationReady', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.notifyApplicationReady).toBeDefined();
    });
  });

  describe('restartApplication', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.restartApplication).toBeDefined();
    });
  });

  describe('sync', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.sync).toBeDefined();
    });
  });
});
