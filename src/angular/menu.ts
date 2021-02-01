import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  names: ['blank'],
  nameAndResolves: {
    open: true,
    close: true,
  },
};

export const PROPERTIES: SpyObjDef = {
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
