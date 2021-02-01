import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
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
