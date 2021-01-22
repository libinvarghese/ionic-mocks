import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
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
