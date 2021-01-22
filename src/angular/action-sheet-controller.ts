import { ActionSheetMock } from './action-sheet';
import { BaseMock } from '../base.mock';

export const METHODS: string[] = ['create'];

export class ActionSheetControllerMock extends BaseMock {
  constructor(actionSheet?: ActionSheetMock) {
    super('ActionSheet', METHODS);
    this.setReturn('create', Promise.resolve(actionSheet || new ActionSheetMock()));
  }
}
