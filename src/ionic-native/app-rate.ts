import { BaseMock } from '../base.mock';

const METHODS = ['promptForRating', 'navigateToAppStore'];

export class AppRateMock extends BaseMock {
  constructor() {
    super('AppRate', METHODS);
  }

  get preferences() {
    return {
      storeAppURL: {},
      callbacks: {},
    };
  }
}
