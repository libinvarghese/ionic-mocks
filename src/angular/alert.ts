import { BaseMock } from '../base.mock';

const METHODS = ['present', 'dismiss', 'onDidDismiss'];

export class AlertMock extends BaseMock {
    constructor() {
        super('Alert', METHODS);

        this.setReturn('present', Promise.resolve());
    }
}
