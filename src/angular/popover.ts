import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
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
