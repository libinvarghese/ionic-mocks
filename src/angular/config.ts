import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
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
