import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
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
