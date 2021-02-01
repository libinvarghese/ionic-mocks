import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  nameAndResolves: ['present', 'dismiss'].reduce((prev, curr) => {
    prev[curr] = undefined;

    return prev;
  }, {}),
};

export class ActionSheetMock extends BaseMock {
  constructor() {
    super('ActionSheet', METHODS);
  }
}
