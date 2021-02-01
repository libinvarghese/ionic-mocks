import { SpyObjMemberDef } from '../base.mock';
import { ViewControllerMock } from './view-controller';

export const METHODS: SpyObjMemberDef = {
  names: ['dismissAll', 'setContent', 'setSpinner', 'setMessage'],
  nameAndResolves: { present: undefined },
};

export class ToastMock extends ViewControllerMock {
  constructor() {
    super('Toast', METHODS);
  }
}
