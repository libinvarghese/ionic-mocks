import { BaseMock } from '../base.mock';

export const METHODS = ['get'];

export class NavParamsMock extends BaseMock {
  constructor(initialObject?: Record<string, unknown>) {
    super('NavParams', METHODS);

    (this.spyObj['get'] as jasmine.Spy).and.callFake((param: string) =>
      initialObject ? initialObject[param] : initialObject
    );
  }
}
