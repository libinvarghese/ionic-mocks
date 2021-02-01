import { Promise as Bluebird } from 'bluebird';
import { normalizeMemberDef, SpyObjDef, spyObjMemberDefStrategy } from '../base.mock';
import MatchersUtil = jasmine.MatchersUtil;
import CustomAsyncMatcherFactories = jasmine.CustomAsyncMatcherFactories;
import CustomEqualityTester = jasmine.CustomEqualityTester;
import CustomAsyncMatcher = jasmine.CustomAsyncMatcher;
import CustomMatcherResult = jasmine.CustomMatcherResult;

export function mockObjectCustomMatchers(
  methods: SpyObjDef | string[],
  properties?: SpyObjDef | string[]
): CustomAsyncMatcherFactories {
  return {
    toMatchMockObject(_util: MatchersUtil, _customEqualityTester: CustomEqualityTester[]): CustomAsyncMatcher {
      return {
        async compare(actual): Promise<CustomMatcherResult> {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const classUnderTest = actual;
          const didPass = true;
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          const message = `Expected MockClass to match Mock Setup ${methods}, ${properties}`;
          let methodsDef: SpyObjDef = {};
          let propertiesDef: SpyObjDef = {};

          expect(classUnderTest).toBeDefined('mock instance');

          methodsDef = normalizeMemberDef(methods);

          await Bluebird.each(Object.keys(spyObjMemberDefStrategy), async def => {
            let methodKeys: string[];
            const methodArr = methodsDef[def] as SpyObjDef | string[];
            if (methodArr != null) {
              methodKeys = def === 'names' ? (methodArr as string[]) : Object.keys(methodArr);
              await Bluebird.each(methodKeys, async key => {
                const context = `${key}`;
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const value = methodArr[key];
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                expect(classUnderTest[key]).toBeDefined(context);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                expect(classUnderTest[key]).toBeInstanceOf(Function);

                switch (def) {
                  case 'nameAndValues': {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                    expect(classUnderTest[key]()).toEqual(value, context);
                    break;
                  }
                  case 'nameAndResolves': {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                    expect(classUnderTest[key]()).withContext(context).toBeInstanceOf(Promise);
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                    await expectAsync(classUnderTest[key]())
                      .withContext(context)
                      .toBeResolvedTo(await value);

                    break;
                  }
                  case 'nameAndRejects': {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                    expect(classUnderTest[key]()).withContext(context).toBeInstanceOf(Promise);
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                    await expectAsync(classUnderTest[key]())
                      .withContext(context)
                      .toBeRejectedWith(await value);

                    break;
                  }
                  case 'nameAndThrows': {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
            propertiesDef = normalizeMemberDef(properties);

            await Bluebird.each(Object.keys(spyObjMemberDefStrategy), async def => {
              let propertyKeys: string[];
              const propertyArr = propertiesDef[def] as SpyObjDef | string[];
              if (propertyArr != null) {
                propertyKeys = def === 'names' ? (propertyArr as string[]) : Object.keys(propertyArr);
                await Bluebird.each(propertyKeys, async key => {
                  const context = `${key}`;
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  const value = propertyArr[key];
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  expect(Object.keys(classUnderTest)).toContain(key);

                  switch (def) {
                    case 'nameAndValues': {
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      expect(classUnderTest[key]).toEqual(value, context);
                      break;
                    }
                    case 'nameAndResolves': {
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      expect(classUnderTest[key]).withContext(context).toBeInstanceOf(Promise);
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      await expectAsync(classUnderTest[key])
                        .withContext(context)
                        .toBeResolvedTo(await value);

                      break;
                    }
                    case 'nameAndRejects': {
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      expect(classUnderTest[key]).withContext(context).toBeInstanceOf(Promise);
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      await expectAsync(classUnderTest[key])
                        .withContext(context)
                        .toBeRejectedWith(await value);

                      break;
                    }
                    case 'nameAndThrows': {
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
            pass: didPass,
            message,
          };
        },
      };
    },
  };
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface AsyncMatchers<T, U> {
      toMatchMockObject(expectationFailOutput?: string): Promise<void>;
    }
  }
}
