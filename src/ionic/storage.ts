import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  names: ['get', 'set', 'remove', 'clear', 'length', 'keys', 'forEach'],
  nameAndResolves: { ready: {} },
};

export const PROPERTIES: SpyObjDef = {
  nameAndValues: { driver: '' },
};

export class StorageMock extends BaseMock {
  private _internal: Record<string, unknown> = {};

  constructor(initialObject: Record<string, unknown> = {}) {
    super('Storage', METHODS, PROPERTIES);

    this._internal = initialObject;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/require-await
    this.spyObj['set'].and.callFake(async (key: string, value: string) => {
      this._internal[key] = value;
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/require-await
    this.spyObj['get'].and.callFake(async (key: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const value = this._internal[key] || null;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(JSON.stringify(value)); // Clone, to avoid direct update on storage
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/require-await
    this.spyObj['remove'].and.callFake(async (key: string) => {
      delete this._internal[key];
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/require-await
    this.spyObj['clear'].and.callFake(async () => {
      this._internal = {};
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/require-await
    this.spyObj['length'].and.callFake(async () => Object.keys(this._internal).length);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/require-await
    this.spyObj['keys'].and.callFake(async () => Object.keys(this._internal));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.spyObj['forEach'].and.callFake(
      // eslint-disable-next-line @typescript-eslint/require-await
      async (iterator: (value: unknown, key: string, iterationNumber: number) => unknown) => {
        Object.keys(this._internal).forEach((key, index) => iterator(this._internal[key], key, index));
      }
    );
  }
}
