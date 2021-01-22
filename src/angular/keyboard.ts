import { BaseMock } from '../base.mock';

const METHODS = [
  'close',
  'didHide',
  'didShow',
  'eventsAvailable',
  'hasFocusedTextInput',
  'isOpen',
  'onClose',
  'willHide',
  'willShow',
];

export class KeyboardMock extends BaseMock {
  constructor() {
    super('Keyboard', METHODS);
    this.setReturn('isOpen', false);
  }
}
