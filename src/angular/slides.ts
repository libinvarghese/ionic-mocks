import { BaseMock } from '../base.mock';

const METHODS = [
    'controlBy',
    'controlInverse',
    'enableKeyboardControl',
    'getActiveIndex',
    'getPreviousIndex',
    'isBeginning',
    'isEnd',
    'length',
    'lockSwipeToNext',
    'lockSwipeToPrev',
    'lockSwipes',
    'resize',
    'slideNext',
    'slidePrev',
    'slideTo',
    'startAutoplay',
    'stopAutoplay',
    'update'
];

export class SlidesMock extends BaseMock {
    constructor() {
        super('Slides', METHODS);
        this.setReturn('getActiveIndex', 0);
        this.setReturn('getPreviousIndex', 0);
        this.setReturn('isBeginning', true);
        this.setReturn('isEnd', false);
        this.setReturn('length', 1);
    }
}
