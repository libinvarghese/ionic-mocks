import { BaseMock } from '../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = ['present', 'dismissAll', 'setContent', 'setSpinner', 'onDidDismiss', 'onWillDismiss'];

export class PopoverMock extends BaseMock {
    constructor() {
        super('Popover', METHODS);
        this.setReturn('present', Promise.resolve());
    }

    @deprecated('new PopoverMock()')
    static instance(): any {
        return new PopoverMock();
    }
}
