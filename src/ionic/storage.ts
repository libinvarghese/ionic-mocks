import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  names: ['get', 'set', 'remove', 'clear', 'length', 'keys', 'forEach'],
  nameAndResolves: { ready: {} },
};

export const PROPERTIES: SpyObjMemberDef = {
  nameAndValues: { driver: '' },
};

export class StorageMock extends BaseMock {
  private _internal = {};

  constructor(initialObject = {}) {
    super('Storage', METHODS, PROPERTIES);

    this._internal = initialObject;
    this.setReturn('ready', Promise.resolve({}));
    this.spyObj['set'].and.callFake(async (key, value) => {
      this._internal[key] = value;
    });
    this.spyObj['get'].and.callFake(async (key) => {
      const _value = this._internal[key] || null;
      return JSON.parse(JSON.stringify(_value)); // Clone, to avoid direct update on storage
    });
    this.spyObj['remove'].and.callFake(async (key) => {
      delete this._internal[key];
    });
    this.spyObj['clear'].and.callFake(async () => {
      this._internal = {};
    });
    this.spyObj['length'].and.callFake(async () => Object.keys(this._internal).length);
    this.spyObj['keys'].and.callFake(async () => Object.keys(this._internal));
    this.spyObj['forEach'].and.callFake(async (iterator) => {
      Object.keys(this._internal).forEach((key, index) => iterator(this._internal[key], key, index));
    });
  }
}
