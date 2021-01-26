import { of } from 'rxjs';
import { BaseMock } from '../base.mock';

const METHODS = ['type', 'downlinkMax', 'onchange', 'onDisconnect', 'onConnect'];

export class NetworkMock extends BaseMock {
    constructor(networkType?: string) {
        super('Network', METHODS);
        this.setReturn('type', networkType || 'wifi');
        this.setReturn('downlinkMax', '42');
        this.setReturn('onchange', of(undefined));
        this.setReturn('onDisconnect', of(undefined));
        this.setReturn('onConnect', of(undefined));
    }
}
