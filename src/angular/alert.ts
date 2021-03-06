import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = ['present', 'dismiss', 'onDidDismiss'];

export class AlertMock extends BaseMock {

    constructor() {
        super('Alert', METHODS);

        this.spyObj.present.and.returnValue(Promise.resolve());
    }

    @deprecated('new AlertMock()')
    public static instance(): any {
        return new AlertMock();
    }
}
