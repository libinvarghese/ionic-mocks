import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';
import { of } from 'rxjs';

const METHODS = [
    'getCurrentPosition',
    'watchPosition',
];

export class GeolocationMock extends BaseMock {
    constructor() {
        super('Geolocation', METHODS);

        this.setReturn('getCurrentPosition', Promise.resolve());
        this.setReturn('watchPosition', of(undefined));
    }

    @deprecated('new GeolocationMock()')
    public static instance(): any {
        return new GeolocationMock();
    }
}
