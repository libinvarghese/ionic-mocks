import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  names: ['register', 'deregister', 'setAsFocused', 'unsetAsFocused', 'tabFocus'],
  nameAndValues: {
    nextId: 0,
  },
};

export class FormMock extends BaseMock {
  constructor() {
    super('Form', METHODS);
  }
}
