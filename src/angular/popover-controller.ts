import { PopoverMock } from './popover';
import { BaseMock } from '../base.mock';

const METHODS = ['create'];

export class PopoverControllerMock extends BaseMock {
  constructor(popOver?: PopoverMock) {
    super('PopoverController', METHODS);
    this.setReturn('create', popOver || new PopoverMock());
  }
}
