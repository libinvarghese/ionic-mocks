import { BaseMock } from '../base.mock';

const METHODS = ['close'];

export class ItemSlidingMock extends BaseMock {
    constructor() {
        super('ItemSliding', METHODS);
    }
}
