import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  names: ['blank'],
  nameAndResolves: {
    open: true,
    close: true,
  },
};

export const PROPERTIES: SpyObjMemberDef = {
  nameAndResolves: {
    content: 'menu content',
    enabled: true,
    id: 'menuId',
    persistent: true,
    side: 'left',
    swipeEnabled: true,
    type: 'reveal',
  },
};

export class MenuMock extends BaseMock {
  constructor() {
    super('Menu', METHODS, PROPERTIES);
  }
}
