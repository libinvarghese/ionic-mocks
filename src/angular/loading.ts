import { BaseMock } from '../base.mock';

const METHODS = ['present', 'dismiss', 'setContent', 'setSpinner'];
export class LoadingMock extends BaseMock {
  constructor() {
    super('Loading', METHODS);
    this.setReturn('present', Promise.resolve());
  }
}
