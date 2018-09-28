import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = [
    'getAppName',
    'getPackageName',
    'getVersionCode',
    'getVersionNumber',
];

export class AppVersionMock extends BaseMock {
    constructor() {
        super('AppVersion', METHODS);

        this.setReturn('getAppName', Promise.resolve());
        this.setReturn('getPackageName', Promise.resolve());
        this.setReturn('getVersionCode', Promise.resolve());
        this.setReturn('getVersionNumber', Promise.resolve());
    }

    @deprecated('new AppVersionMock()')
    public static instance(): any {
        return new AppVersionMock();
    }
}
