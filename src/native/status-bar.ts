import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  names: [
    'overlaysWebView',
    'styleDefault',
    'styleLightContent',
    'styleBlackTranslucent',
    'styleBlackOpaque',
    'backgroundColorByName',
    // eslint-disable-next-line no-secrets/no-secrets
    'backgroundColorByHexString',
    'hide',
    'show',
  ],
};

export const PROPERTIES: SpyObjDef = {
  nameAndValues: {
    isVisible: true,
  },
};

export class StatusBarMock extends BaseMock {
  constructor() {
    super('StatusBar', METHODS, PROPERTIES);
  }
}
