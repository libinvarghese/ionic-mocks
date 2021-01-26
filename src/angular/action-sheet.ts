import { BaseMock } from '../base.mock';

const METHODS: string[] = ['present', 'dismiss'];

export class ActionSheetMock extends BaseMock {
  constructor() {
    super('ActionSheet', METHODS);

    this.setReturn('present', Promise.resolve());
    this.setReturn('dismiss', Promise.resolve());
  }

}
