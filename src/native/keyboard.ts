import { of } from 'rxjs';
import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  names: ['hideKeyboardAccessoryBar', 'show', 'close', 'disableScroll'],
  nameAndValues: {
    // eslint-disable-next-line rxjs/finnish
    onKeyboardShow: of(undefined),
    // eslint-disable-next-line rxjs/finnish
    onKeyboardHide: of(undefined),
  },
};

export class KeyboardMock extends BaseMock {
  constructor() {
    super('Keyboard', METHODS);
  }
}
