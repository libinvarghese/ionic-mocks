import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  nameAndResolves: {
    present: undefined,
  },
  names: ['dismiss', 'onDidDismiss'],
};

export class AlertMock extends BaseMock {
  constructor() {
    super('Alert', METHODS);
  }
}
