import { of } from 'rxjs';
import { BaseMock } from '../base.mock';

const METHODS = ['hideKeyboardAccessoryBar', 'show', 'close', 'disableScroll', 'onKeyboardShow', 'onKeyboardHide'];

export class KeyboardMock extends BaseMock {
  constructor() {
    super('Keyboard', METHODS);
    this.setReturn('onKeyboardShow', of(undefined));
    this.setReturn('onKeyboardHide', of(undefined));
  }
}
