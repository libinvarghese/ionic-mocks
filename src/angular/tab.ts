import { BaseMock } from '../base.mock';

export const METHODS = ['linker'];
export class TabMock extends BaseMock {
  constructor() {
    super('Tab', METHODS);
  }
}
