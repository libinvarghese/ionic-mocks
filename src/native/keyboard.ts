import { of } from 'rxjs';
import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  names: ['hideKeyboardAccessoryBar', 'show', 'close', 'disableScroll'],
  nameAndValues: {
    onKeyboardShow: of(undefined),
    onKeyboardHide: of(undefined),
  },
};

export class KeyboardMock extends BaseMock {
  constructor() {
    super('Keyboard', METHODS);
  }
}
