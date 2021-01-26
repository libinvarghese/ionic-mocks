import { BaseMock } from '../base.mock';

const METHODS = ['present', 'dismissAll', 'setContent', 'setSpinner', 'onDidDismiss', 'onWillDismiss'];

export class PopoverMock extends BaseMock {
    constructor() {
        super('Popover', METHODS);
        this.setReturn('present', Promise.resolve());
    }
}
