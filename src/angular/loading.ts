import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  names: ['dismiss', 'setContent', 'setSpinner'],
  nameAndResolves: {
    present: undefined,
  },
};

export class LoadingMock extends BaseMock {
  constructor() {
    super('Loading', METHODS);
  }
}
