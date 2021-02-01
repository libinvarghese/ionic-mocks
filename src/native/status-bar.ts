import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
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

export const PROPERTIES: SpyObjMemberDef = {
  nameAndValues: {
    isVisible: true,
  },
};

export class StatusBarMock extends BaseMock {
  constructor() {
    super('StatusBar', METHODS, PROPERTIES);
  }
}
