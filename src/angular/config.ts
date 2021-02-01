import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  nameAndValues: {
    get: '',
    getBoolean: true,
    getNumber: 0,
  },
  names: ['set', 'settings', 'setModeConfig', 'getModeConfig', 'setTransition', 'getTransition'],
};

export class ConfigMock extends BaseMock {
  constructor() {
    super('Config', METHODS);
  }
}
