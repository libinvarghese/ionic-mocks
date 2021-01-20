import { of } from 'rxjs';
import { BaseMock } from '../base.mock';
import { deprecated } from 'deprecated-decorator';

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
        this.setReturn('watchForTouches', of<Object>({}));
        this.setReturn('onHomeIconPressed', of(undefined));
    }

    @deprecated('new ThreeDeeTouchMock()')
    public static instance(): any {
        return new ThreeDeeTouchMock();
    }
}
