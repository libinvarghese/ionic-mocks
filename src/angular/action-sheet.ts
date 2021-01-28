import { BaseMock, SpyObjMembers } from '../base.mock';

export const METHODS: SpyObjMembers<unknown> = ['present', 'dismiss'].reduce((prev, curr) => {
  prev[curr] = Promise.resolve();

  return prev;
}, {});

export class ActionSheetMock extends BaseMock {
  constructor() {
    super('ActionSheet', { nameAndValues: METHODS });
  }
}
