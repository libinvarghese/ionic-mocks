import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
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
