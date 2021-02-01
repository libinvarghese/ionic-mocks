import { BaseMock, SpyObjMemberDef } from '../base.mock';
import { MenuMock } from './menu';

export const METHODS: SpyObjMemberDef = {
  nameAndValues: {
    isEnabled: true,
    isOpen: false,
  },
  nameAndResolves: {
    open: undefined,
    toggle: undefined,
    close: undefined,
  },
  names: ['enable', 'get', 'getMenus', 'getOpen', 'swipeEnable'],
};

export class MenuControllerMock extends BaseMock {
  constructor(menu?: MenuMock) {
    super('MenuController', METHODS);
    const m = menu || new MenuMock();
    this.setReturn('enable', m);
    this.setReturn('get', m);
    this.setReturn('getMenus', [m]);
    this.setReturn('getOpen', m);
    this.setReturn('swipeEnable', m);
  }
}
