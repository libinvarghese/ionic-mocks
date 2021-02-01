import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
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
