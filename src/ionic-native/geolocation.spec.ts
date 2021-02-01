import { GeolocationMock } from './geolocation';

describe('GeolocationMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new GeolocationMock();
  });

  it('should initialize', () => {
    expect(classUnderTest).toBeDefined();
  });

  describe('getCurrentPosition', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.getCurrentPosition).toBeDefined();
    });
  });

  describe('watchPosition', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.watchPosition).toBeDefined();
    });
  });
});
