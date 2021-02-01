import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  names: ['close', 'didHide', 'didShow', 'eventsAvailable', 'hasFocusedTextInput', 'onClose', 'willHide', 'willShow'],
  nameAndValues: {
    isOpen: false,
  },
};

export class KeyboardMock extends BaseMock {
  constructor() {
    super('Keyboard', METHODS);
  }
}
