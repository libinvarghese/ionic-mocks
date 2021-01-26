import { BaseMock } from '../base.mock';

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
}
