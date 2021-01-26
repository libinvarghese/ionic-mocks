import { BaseMock } from '../base.mock';
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
}
