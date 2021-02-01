import { BaseMock } from '../base.mock';

export const METHODS = ['close'];

export class ItemSlidingMock extends BaseMock {
  constructor() {
    super('ItemSliding', METHODS);
  }
}
