import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  names: ['dismiss', 'onDidDismiss'],
  nameAndResolves: {
    present: undefined,
  },
};

export class ModalMock extends BaseMock {
  constructor() {
    super('Modal', METHODS);
  }
}
