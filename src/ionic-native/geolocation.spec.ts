import { GeolocationMock } from './geolocation';

describe('GeolocationMock', () => {
  let classUnderTest: any;

  beforeEach(() => {
    classUnderTest = new GeolocationMock();
  });

  it('should initialize', () => {
    expect(classUnderTest).toBeDefined();
  });

  describe('getCurrentPosition', () => {
    it('should be defined', () => {
      expect(classUnderTest.getCurrentPosition).toBeDefined();
    });
  });

  describe('watchPosition', () => {
    it('should be defined', () => {
      expect(classUnderTest.watchPosition).toBeDefined();
    });
  });
});
