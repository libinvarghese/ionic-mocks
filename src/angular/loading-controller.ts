import { BaseMock } from '../base.mock';
import { LoadingMock } from './loading';

export const METHODS = ['create'];

export class LoadingControllerMock extends BaseMock {
  constructor(loading?: LoadingMock) {
    super('LoadingController', METHODS);
    this.setReturn('create', loading || new LoadingMock());
  }
}
