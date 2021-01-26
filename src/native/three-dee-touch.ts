import { of } from 'rxjs';
import { BaseMock } from '../base.mock';

const METHODS = [
    'isAvailable',
    'watchForTouches',
    'configureQuickActions',
    'onHomeIconPressed',
    'enableLinkPreview',
    'disableLinkPreview'
];

export class ThreeDeeTouchMock extends BaseMock {
    constructor() {
        super('ThreeDeeTouch', METHODS);

        this.setReturn('isAvailable', Promise.resolve(true));
        this.setReturn('watchForTouches', of({}));
        this.setReturn('onHomeIconPressed', of(undefined));
    }
}
