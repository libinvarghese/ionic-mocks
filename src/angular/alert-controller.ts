import { BaseMock } from '../base.mock';
import { AlertMock } from './alert';

export const METHODS = ['create'];

export class AlertControllerMock extends BaseMock {
  constructor(alertMock?: AlertMock) {
    super('AlertController', METHODS);
    this.setReturn('create', Promise.resolve(alertMock || new AlertMock()));
  }
}
