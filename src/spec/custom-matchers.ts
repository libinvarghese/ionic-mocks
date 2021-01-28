import { SpyObjMemberDef, spyObjMemberDefStrategy } from '../base.mock';
import { Promise as Bluebird } from 'bluebird';

import MatchersUtil = jasmine.MatchersUtil;
import CustomAsyncMatcherFactories = jasmine.CustomAsyncMatcherFactories;
import CustomEqualityTester = jasmine.CustomEqualityTester;
import CustomAsyncMatcher = jasmine.CustomAsyncMatcher;
import CustomMatcherResult = jasmine.CustomMatcherResult;

export function mockObjectCustomMatchers(
  methods: SpyObjMemberDef | string[],
  properties?: SpyObjMemberDef | string[],
  ignore?: any
): CustomAsyncMatcherFactories {
  return {
    toMatchMockObject(util: MatchersUtil, customEqualityTester: CustomEqualityTester[]): CustomAsyncMatcher {
      return {
        async compare(actual): Promise<CustomMatcherResult> {
          const classUnderTest = actual;
          const pass = true;
          const message = `Expected ${classUnderTest} to match Mock Setup ${methods}, ${properties}`;
          let methodsDef: SpyObjMemberDef = {};
          let propertiesDef: SpyObjMemberDef = {};

          expect(classUnderTest).toBeDefined('mock instance');

          if (Array.isArray(methods)) {
            methodsDef.names = methods;
          } else {
            methodsDef = methods;
          }

          await Bluebird.each(Object.keys(spyObjMemberDefStrategy), async (def) => {
            let methodKeys: string[];
            const methodArr = methodsDef[def];
            if (methodArr != null) {
              methodKeys = def === 'names' ? methodArr : Object.keys(methodArr);
              await Bluebird.each(methodKeys, async (key) => {
                const context = `${key}`;
                const value = methodArr[key];
                expect(classUnderTest[key]).toBeDefined(context);
                expect(classUnderTest[key]).toBeInstanceOf(Function);

                switch (def) {
                  case 'nameAndValues': {
                    expect(classUnderTest[key]()).toEqual(value, context);
                    break;
                  }
                  case 'nameAndResolves': {
                    expect(classUnderTest[key]()).withContext(context).toBeInstanceOf(Promise);
                    await expectAsync(classUnderTest[key]())
                      .withContext(context)
                      .toBeResolvedTo(await value);

                    break;
                  }
                  case 'nameAndRejects': {
                    expect(classUnderTest[key]()).withContext(context).toBeInstanceOf(Promise);
                    await expectAsync(classUnderTest[key]())
                      .withContext(context)
                      .toBeRejectedWith(await value);

                    break;
                  }
                  case 'nameAndThrows': {
                    expect(classUnderTest[key]).withContext(context).toThrowError(value);
                    break;
                  }
                  // TODO implement later, maybe with RxJS TestScheduler
                  case 'nameAndGenerators': // falls through
                  case 'nameAndCallFakes': // falls through
                  case 'names': // falls through
                  default:
                    break;
                }
              });
            }
          });

          if (properties != null) {
            if (Array.isArray(properties)) {
              propertiesDef.names = properties;
            } else {
              propertiesDef = properties;
            }

            await Bluebird.each(Object.keys(spyObjMemberDefStrategy), async (def) => {
              let propertyKeys: string[];
              const propertyArr = propertiesDef[def];
              if (propertyArr != null) {
                propertyKeys = def === 'names' ? propertyArr : Object.keys(propertyArr);
                await Bluebird.each(propertyKeys, async (key) => {
                  const context = `${key}`;
                  const value = propertyArr[key];
                  expect(classUnderTest[key]).toBeDefined(context);
                  expect(classUnderTest[key]).toBeInstanceOf(Function);

                  switch (def) {
                    case 'nameAndValues': {
                      expect(classUnderTest[key]()).toEqual(value, context);
                      break;
                    }
                    case 'nameAndResolves': {
                      expect(classUnderTest[key]()).withContext(context).toBeInstanceOf(Promise);
                      await expectAsync(classUnderTest[key]())
                        .withContext(context)
                        .toBeResolvedTo(await value);

                      break;
                    }
                    case 'nameAndRejects': {
                      expect(classUnderTest[key]()).withContext(context).toBeInstanceOf(Promise);
                      await expectAsync(classUnderTest[key]())
                        .withContext(context)
                        .toBeRejectedWith(await value);

                      break;
                    }
                    case 'nameAndThrows': {
                      expect(classUnderTest[key]).withContext(context).toThrowError(value);
                      break;
                    }
                    // TODO implement later, maybe with RxJS TestScheduler
                    case 'nameAndGenerators': // falls through
                    case 'nameAndCallFakes': // falls through
                    case 'names': // falls through
                    default:
                      break;
                  }
                });
              }
            });
          }

          return {
            pass,
            message,
          };
        },
      };
    },
  };
}

declare global {
  namespace jasmine {
    interface AsyncMatchers<T, U> {
      toMatchMockObject(expectationFailOutput?: any): Promise<void>;
    }
  }
}
