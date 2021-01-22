import { BaseMock } from '../base.mock';

const METHODS = [
  'available',
  'gestureSelectionChanged',
  'gestureSelectionEnd',
  'gestureSelectionStart',
  'impact',
  'notification',
  'selection',
];

export class HapticMock extends BaseMock {
  constructor() {
    super('Haptic', METHODS);
    this.setReturn('available', true);
  }
}
