import { of } from 'rxjs';
import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = [
    'getCurrentPackage',
    'getPendingPackage',
    'checkForUpdate',
    'notifyApplicationReady',
    'restartApplication',
    'sync'
];

export class CodePushMock extends BaseMock {
    constructor() {
        super('CodePush', METHODS);

        this.setReturn('getCurrentPackage', Promise.resolve());
        this.setReturn('getPendingPackage', Promise.resolve());
        this.setReturn('checkForUpdate', Promise.resolve());
        this.setReturn('notifyApplicationReady', Promise.resolve());
        this.setReturn('restartApplication', Promise.resolve());
        this.setReturn('sync', of({}));
    }

    get preferences() {
        return {
          storeAppURL: {},
          callbacks: {}
        };
    }

    @deprecated('new CodePushMock()')
    public static instance(): any {
        return new CodePushMock();
    }
}