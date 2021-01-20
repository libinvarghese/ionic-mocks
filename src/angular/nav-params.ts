import { deprecated } from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = ['get'];

export class NavParamsMock extends BaseMock {
    constructor(getReturn?: any) {
        super('NavParams', METHODS);

        this.spyObj.get.and.callFake(param => getReturn ? getReturn[param] : getReturn);
    }

    @deprecated('new NavParamsMock()')
    public static instance(getReturn?: any): any {
        return new NavParamsMock(getReturn);
    }
}
