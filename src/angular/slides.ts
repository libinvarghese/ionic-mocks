import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  nameAndValues: {
    getActiveIndex: 0,
    getPreviousIndex: 0,
    isBeginning: true,
    isEnd: false,
    length: 1,
  },
  names: [
    'controlBy',
    'controlInverse',
    'enableKeyboardControl',
    'lockSwipeToNext',
    'lockSwipeToPrev',
    'lockSwipes',
    'resize',
    'slideNext',
    'slidePrev',
    'slideTo',
    'startAutoplay',
    'stopAutoplay',
    'update',
  ],
};

export class SlidesMock extends BaseMock {
  constructor() {
    super('Slides', METHODS);
  }
}
