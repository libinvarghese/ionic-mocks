import { BaseMock } from '../base.mock';

export const METHODS = ['subscribe', 'publish', 'unsubscribe'];

export class EventsMock extends BaseMock {
  constructor() {
    super('Events', METHODS);
  }
}
