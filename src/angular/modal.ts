import { BaseMock } from '../base.mock';

const METHODS = ['present', 'dismiss', 'onDidDismiss'];

export class ModalMock extends BaseMock {
  constructor() {
    super('Modal', METHODS);
    this.setReturn('present', Promise.resolve());
  }
}
