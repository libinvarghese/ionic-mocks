import { BaseMock } from '../base.mock';
import { ToastMock } from './toast';

const METHODS = ['create'];

export class ToastControllerMock extends BaseMock {
  constructor(toast?: ToastMock) {
    super('ToastController', METHODS);
    this.setReturn('create', toast || new ToastMock());
  }
}
