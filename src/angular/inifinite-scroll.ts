import { BaseMock } from '../base.mock';

export const METHODS = ['complete', 'enable', 'waitFor'];

export class InfiniteScrollMock extends BaseMock {
  constructor() {
    super('InfiniteScroll', METHODS);
  }
}
