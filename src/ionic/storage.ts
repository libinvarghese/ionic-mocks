import { BaseMock } from '../base.mock';

const METHODS = ['driver', 'ready', 'get', 'set', 'remove', 'clear', 'length', 'keys', 'forEach'];

export class StorageMock extends BaseMock {
    private _internal = {};

    constructor(initialObject = {}) {
        super('Storage', METHODS);

        this._internal = initialObject;
        this.setProperty('driver', '');
        this.setReturn('ready', Promise.resolve({}));
        this.spyObj['set'].and.callFake((key, value) => {
            this._internal[key] = value;
            return Promise.resolve();
        });
        this.spyObj['get'].and.callFake(key => {
            const _value = this._internal[key] || null;
            return Promise.resolve(JSON.parse(JSON.stringify(_value))); // Clone, to avoid direct update on storage
        });
        this.spyObj['remove'].and.callFake(key => {
            delete this._internal[key];
            return Promise.resolve();
        });
        this.spyObj['clear'].and.callFake(() => {
            this._internal = {};
            return Promise.resolve();
        });
        this.setReturn('length', Promise.resolve(Object.keys(this._internal).length));
        this.setReturn('keys', Promise.resolve(Object.keys(this._internal)));
        this.spyObj['forEach'].and.callFake(iterator => {
            Object.keys(this._internal).forEach((key, index) => iterator(this._internal[key], key, index));
            return Promise.resolve();
        });
    }
}
