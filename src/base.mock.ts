export type SpyObjMembers = Record<string, unknown>;

export abstract class BaseMock {
  protected spyObj: unknown;

  constructor(baseName: string, methods: SpyObjMembers | string[], properties?: SpyObjMembers | string[]) {
    let methodKeys: string[];

    if (Array.isArray(methods)) {
      methodKeys = methods;
    }

    methodKeys = Object.keys(methods);

    this.spyObj = jasmine.createSpyObj(baseName, methods, properties);
    Object.assign(this, this.spyObj);
  }

  setReturn(method: string, returnValue: unknown): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.spyObj[method].and.returnValue(returnValue);
  }

  setProperty(property: string, returnValue: unknown): void {
    this[property] = returnValue;
  }
}
