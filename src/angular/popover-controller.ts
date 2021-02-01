import { BaseMock } from '../base.mock';
import { PopoverMock } from './popover';

export const METHODS = ['create'];

export class PopoverControllerMock extends BaseMock {
  constructor(popOver?: PopoverMock) {
    super('PopoverController', METHODS);
    this.setReturn('create', popOver || new PopoverMock());
  }
}
