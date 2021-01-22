import { BaseMock } from '../base.mock';

const METHODS = [
  'overlaysWebView',
  'styleDefault',
  'styleLightContent',
  'styleBlackTranslucent',
  'styleBlackOpaque',
  'backgroundColorByName',
  'backgroundColorByHexString',
  'hide',
  'show',
];

export class StatusBarMock extends BaseMock {
  constructor() {
    super('StatusBar', METHODS);
    this.setProperty('isVisible', true);
  }
}
