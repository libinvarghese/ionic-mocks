import { SpyObjDef } from '../base.mock';
import { ViewControllerMock } from './view-controller';

export const METHODS: SpyObjDef = {
  names: ['dismissAll', 'setContent', 'setSpinner', 'setMessage'],
  nameAndResolves: { present: undefined },
};

export class ToastMock extends ViewControllerMock {
  constructor() {
    super('Toast', METHODS);
  }
}
