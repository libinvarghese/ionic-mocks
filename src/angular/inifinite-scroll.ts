import { BaseMock } from '../base.mock';

const METHODS = ['complete', 'enable', 'waitFor'];

export class InfiniteScrollMock extends BaseMock {

    constructor() {
        super('InfiniteScroll', METHODS);
    }
}
