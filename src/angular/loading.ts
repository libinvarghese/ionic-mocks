import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
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
