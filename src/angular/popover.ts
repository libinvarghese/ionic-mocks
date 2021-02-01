import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  names: ['dismissAll', 'setContent', 'setSpinner', 'onDidDismiss', 'onWillDismiss'],
  nameAndResolves: {
    present: undefined,
  },
};

export class PopoverMock extends BaseMock {
  constructor() {
    super('Popover', METHODS);
  }
}
