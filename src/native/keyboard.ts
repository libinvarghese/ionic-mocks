import { of } from 'rxjs';
import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
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
