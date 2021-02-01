import { BaseMock } from '../base.mock';
import { ActionSheetMock } from './action-sheet';

export const METHODS: string[] = ['create'];

export class ActionSheetControllerMock extends BaseMock {
  constructor(actionSheet?: ActionSheetMock) {
    super('ActionSheet', METHODS);
    this.setReturn('create', Promise.resolve(actionSheet || new ActionSheetMock()));
  }
}
