import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = ['promptForRating', 'navigateToAppStore'];

export class AppRateMock extends BaseMock {
    constructor() {
        super('AppRate', METHODS);
    }

    get preferences() {
        return {
          storeAppURL: {},
          callbacks: {}
        };
    }

    @deprecated('new AppRate()')
    static instance(): any {
        return new AppRateMock();
    }
}
