import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  nameAndResolves: [
    'startTrackerWithId',
    'setAllowIDFACollection',
    'setUserId',
    'setAnonymizeIp',
    'setAppVersion',
    'setOptOut',
    'debugMode',
    'trackMetric',
    'trackView',
    'addCustomDimension',
    'trackEvent',
    'trackException',
    'trackTiming',
    'addTransaction',
    'addTransactionItem',
    'enableUncaughtExceptionReporting',
  ].reduce((prev, curr) => {
    prev[curr] = undefined;

    return prev;
  }, {}),
};

export class GoogleAnalyticsMock extends BaseMock {
  constructor() {
    super('GoogleAnalytics', METHODS);
  }
}
