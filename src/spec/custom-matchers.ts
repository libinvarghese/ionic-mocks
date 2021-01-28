import { SpyObjMembers } from '../base.mock';
import { Promise as Bluebird } from 'bluebird';

import MatchersUtil = jasmine.MatchersUtil;
import CustomAsyncMatcherFactories = jasmine.CustomAsyncMatcherFactories;
import CustomEqualityTester = jasmine.CustomEqualityTester;
import CustomAsyncMatcher = jasmine.CustomAsyncMatcher;
import CustomMatcherResult = jasmine.CustomMatcherResult;

export function mockObjectCustomMatchers(
  methods: SpyObjMembers<unknown> | string[],
  properties?: SpyObjMembers<unknown> | string[],
  ignore?: any
): CustomAsyncMatcherFactories {
  return {
    toMatchMockObject(util: MatchersUtil, customEqualityTester: CustomEqualityTester[]): CustomAsyncMatcher {
      return {
        async compare(actual): Promise<CustomMatcherResult> {
          const classUnderTest = actual;
          const pass = true;
          const message = `Expected ${classUnderTest} to match Mock Setup ${methods}, ${properties}`;
          let checkMethodPresentOnly = false;
          let checkPropertyPresentOnly = false;
          let methodKeys: string[];
          let propertyKeys: string[];

          expect(classUnderTest).toBeDefined('mock instance');

          if (Array.isArray(methods)) {
            methodKeys = methods;
            checkMethodPresentOnly = true;
          } else {
            methodKeys = Object.keys(methods);
          }

          await Bluebird.each(methodKeys, async (key) => {
            expect(classUnderTest[key]).withContext(`${key}`).toBeDefined();

            if (!checkMethodPresentOnly) {
              if (methods[key] instanceof Promise) {
                expect(classUnderTest[key]()).withContext(`${key}`).toBeInstanceOf(Promise);
                await expectAsync(classUnderTest[key]()).withContext(`${key}`).toBeResolvedTo(await methods[key]);
              }
            }
          });

          if (properties) {
            if (Array.isArray(properties)) {
              propertyKeys = properties;
              checkPropertyPresentOnly = true;
            } else {
              propertyKeys = Object.keys(properties);
            }

            propertyKeys.forEach((key) => {
              expect(classUnderTest[key]).withContext(`${key}`).toBeDefined();

              if (!checkPropertyPresentOnly) {
                expect(classUnderTest[key]).toEqual(properties[key], `${key}`);
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
