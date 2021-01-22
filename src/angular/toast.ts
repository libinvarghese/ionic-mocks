import deprecated from 'deprecated-decorator';
import { ViewControllerMock } from './view-controller';

const METHODS = ['present', 'dismissAll', 'setContent', 'setSpinner', 'setMessage'];
export class ToastMock extends ViewControllerMock {
    constructor() {
        super('Toast', METHODS);
        this.setReturn('present', Promise.resolve());
    }

    @deprecated('new ToastMock()')
    static instance(): any {
        return new ToastMock();
    }
}
