import { BaseMock, SpyObjMembers } from '../base.mock';

export const methods: SpyObjMembers = ['present', 'dismiss'].reduce((prev, curr) => {
  prev[curr] = Promise.resolve();

  return prev;
}, {});

export class ActionSheetMock extends BaseMock {
  constructor() {
    super('ActionSheet', methods);
  }
}
