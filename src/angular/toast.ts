import { ViewControllerMock } from './view-controller';

const METHODS = ['present', 'dismissAll', 'setContent', 'setSpinner', 'setMessage'];
export class ToastMock extends ViewControllerMock {
    constructor() {
        super('Toast', METHODS);
        this.setReturn('present', Promise.resolve());
    }
}
