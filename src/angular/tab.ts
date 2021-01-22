import { BaseMock } from '../base.mock';

const METHODS = ['linker'];
export class TabMock extends BaseMock {
  constructor() {
    super('Tab', METHODS);
  }
}
