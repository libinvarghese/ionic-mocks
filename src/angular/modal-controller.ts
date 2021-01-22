import { BaseMock } from '../base.mock';
import { ModalMock } from './modal';

const METHODS = ['create'];

export class ModalControllerMock extends BaseMock {
  constructor(modal?: ModalMock) {
    super('ModalController', METHODS);
    this.setReturn('create', modal || new ModalMock());
  }
}
