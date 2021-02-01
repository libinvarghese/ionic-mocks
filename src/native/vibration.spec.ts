import { VibrationMock } from './vibration';

describe('VibrationMock', () => {
  let vibration;

  beforeEach(() => {
    vibration = new VibrationMock();
  });

  it('should initialise', () => {
    expect(vibration).toBeDefined();
  });

  describe('vibrate', () => {
    it('should have been called', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      vibration.vibrate();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(vibration.vibrate).toHaveBeenCalledWith();
    });
  });
});
