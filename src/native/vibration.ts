import { BaseMock } from '../base.mock';

const METHODS = ['vibrate'];

export class VibrationMock extends BaseMock {
  constructor() {
    super('Vibration', METHODS);
  }
}
