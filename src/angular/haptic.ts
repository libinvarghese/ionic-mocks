import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  nameAndValues: {
    available: true,
  },
  names: [
    'gestureSelectionChanged',
    'gestureSelectionEnd',
    'gestureSelectionStart',
    'impact',
    'notification',
    'selection',
  ],
};

export class HapticMock extends BaseMock {
  constructor() {
    super('Haptic', METHODS);
  }
}
