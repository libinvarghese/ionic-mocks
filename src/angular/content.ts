import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  nameAndValues: {
    getContentDimensions: {},
  },
  nameAndResolves: {
    scrollTo: undefined,
    scrollToBottom: undefined,
    scrollToTop: undefined,
  },
  names: ['addImg', 'getFixedElement', 'resize'],
};

export const PROPERTIES: SpyObjDef = {
  nameAndValues: {
    contentBottom: 10,
    contentHeight: 10,
    contentTop: 10,
    directionX: 'left',
    directionY: 'up',
    isScrolling: false,
    scrollHeight: 10,
    scrollLeft: 10,
    scrollTop: 10,
    scrollWidth: 10,
  },
};

export class ContentMock extends BaseMock {
  constructor() {
    super('Content', METHODS, PROPERTIES);
  }
}
