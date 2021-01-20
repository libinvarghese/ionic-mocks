import { of } from 'rxjs';
import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = ['hideKeyboardAccessoryBar', 'show', 'close', 'disableScroll', 'onKeyboardShow', 'onKeyboardHide'];

export class KeyboardMock extends BaseMock {
    constructor() {
        super('Keyboard', METHODS);
        this.setReturn('onKeyboardShow', of(undefined));
        this.setReturn('onKeyboardHide', of(undefined));
    }

    @deprecated('new KeyboardMock()')
    public static instance(): any {
        return new KeyboardMock();
    }
}
