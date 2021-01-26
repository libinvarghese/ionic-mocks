import { BaseMock } from '../base.mock';

const METHODS = ['show', 'hide'];

export class SplashScreenMock extends BaseMock {
    constructor() {
        super('SplashScreen', METHODS);
    }
}
