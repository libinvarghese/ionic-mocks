export type SpyObjMembers<T> = Record<string, T>;

export interface SpyObjMemberDef {
  names?: string[];
  nameAndValues?: SpyObjMembers<unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nameAndCallFakes?: SpyObjMembers<<O>(...args: any[]) => O>;
  nameAndRejects?: SpyObjMembers<unknown>;
  nameAndResolves?: SpyObjMembers<unknown>;
  nameAndThrows?: SpyObjMembers<Error | Record<string, unknown> | string>;
  nameAndGenerators?: SpyObjMembers<unknown[]>;
}

const jasmineSpyObjMemberDefStrategy = {
  names: null,
  nameAndValues: 'returnValue',
};

const customSpyObjMemberDefStrategy = {
  nameAndCallFakes: 'callFake',
  nameAndRejects: 'rejectWith',
  nameAndResolves: 'resolveTo',
  nameAndThrows: 'throwError',
  nameAndGenerators: 'returnValues',
};

export const spyObjMemberDefStrategy = { ...jasmineSpyObjMemberDefStrategy, ...customSpyObjMemberDefStrategy };

interface SpyObjPropertyDescriptor extends PropertyDescriptor {
  get?: jasmine.Spy;
  set?: jasmine.Spy;
}

// Since jasmine.createSpyObj does the majority of work for callReturn (nameValues), then for names
// Creates spyObj only if (methods.nameAndValues || methods.names) != null
function createSpyObjViaJasmine(baseName: string, methods: SpyObjMemberDef, properties?: SpyObjMemberDef) {
  let spyObj: Record<string, unknown>;
  const jasmineMethods = methods.nameAndValues || methods.names;

  if (jasmineMethods != null) {
    // Bug - https://github.com/jasmine/jasmine/issues/1837
    // This has been fixed. Please watch for next release
    // this.spyObj = jasmine.createSpyObj(baseName, methods, properties);
    // Workaround for Bug - https://github.com/jasmine/jasmine/issues/1837 -> this.createSpyObj
    spyObj = jasmine.createSpyObj(baseName, jasmineMethods) as Record<string, unknown>;
  }

  const jasmineProperties = properties?.nameAndValues || properties?.names;
  if (jasmineProperties != null) {
    spyObj = spyObj || {};
    addPropertiesToSpyObj(spyObj, baseName, jasmineProperties);
  }

  return spyObj;
}

function createSpyObjViaDef(
  spyObj: Record<string, unknown>,
  baseName: string,
  methods: SpyObjMemberDef,
  properties?: SpyObjMemberDef
) {
  const obj = spyObj || {}; // Create Spy Obj if createSpyObjViaJasmine failed

  addMembersToSpyObjViaDef(obj, baseName, methods, addMethodsToSpyObj);
  if (properties) {
    addMembersToSpyObjViaDef(obj, baseName, properties, addPropertiesToSpyObj);
  }

  // Must likely empty objects passed to methods & properties
  if (Object.keys(obj).length === 0) {
    throw new Error('createSpyObj requires a non-empty SpyObjMemberDef');
  }

  return obj;
}

function addMembersToSpyObjViaDef(
  spyObj: Record<string, unknown>,
  baseName: string,
  members: SpyObjMemberDef,
  addMembersFn: <T>(
    spyObj: Record<string, unknown>,
    baseName: string,
    members: SpyObjMembers<T> | string[],
    spyStrategy?: string
  ) => void
) {
  const obj = spyObj;

  const jasmineMethods = members.nameAndValues || members.names;

  // Add methods.names, since methods.nameAndValues was added
  if (jasmineMethods != null && jasmineMethods === members.nameAndValues) {
    addMembersFn(obj, baseName, members.names);
  }

  Object.keys(customSpyObjMemberDefStrategy).forEach(key => {
    addMembersFn(obj, baseName, members[key], customSpyObjMemberDefStrategy[key]);
  });

  return obj;
}

function addMethodsToSpyObj<T>(
  spyObj: Record<string, unknown>,
  baseName: string,
  methods: SpyObjMembers<T> | string[],
  spyStrategy = 'returnValue'
) {
  const obj = spyObj;
  const methodsArr = normalizeKeyValues(methods);
  methodsArr.forEach(element => {
    const spy = jasmine.createSpy(`${baseName}.${element[0]}`);
    if (element.length > 1) {
      if (spyStrategy === 'returnValues') {
        spy.and.returnValues(...(element[1] as []));
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        spy.and[spyStrategy](element[1]);
      }
    }

    obj[element[0]] = spy;
  });
}

function addPropertiesToSpyObj(
  spyObj: Record<string, unknown>,
  baseName: string,
  properties?: SpyObjMembers<unknown> | string[],
  spyStrategy = 'returnValue'
) {
  const obj = spyObj;
  const propertiesArr = normalizeKeyValues(properties);
  propertiesArr.forEach(element => {
    const descriptor: SpyObjPropertyDescriptor = {
      enumerable: true,
      get: jasmine.createSpy(baseName + '.' + element[0] + '.get'),
      set: jasmine.createSpy(baseName + '.' + element[0] + '.set'),
    };
    if (element.length > 1) {
      if (spyStrategy === 'returnValues') {
        descriptor.get.and.returnValues(...(element[1] as []));
        descriptor.set.and.returnValues(...(element[1] as []));
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        descriptor.get.and[spyStrategy](element[1]);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        descriptor.set.and[spyStrategy](element[1]);
      }
    }
    Object.defineProperty(obj, element[0], descriptor);
  });
}

type SpyObjMemberTuple = [string, unknown?];
function normalizeKeyValues(object: SpyObjMembers<unknown> | string[]) {
  const result: SpyObjMemberTuple[] = [];
  if (Array.isArray(object)) {
    object.forEach(i => result.push([i]));
  } else if (object instanceof Object) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        result.push([key, object[key]]);
      }
    }
  }
  return result;
}

export function normalizeMemberDef(def: SpyObjMemberDef | string[]): SpyObjMemberDef {
  let retDef: SpyObjMemberDef = {};

  if (Array.isArray(def)) {
    retDef.names = def;
  } else {
    retDef = def;
  }

  return retDef;
}

export abstract class BaseMock {
  protected spyObj: unknown;

  constructor(baseName: string, methods: SpyObjMemberDef | string[], properties?: SpyObjMemberDef | string[]) {
    this.createSpyObj(baseName, methods, properties);
    Object.assign(this, this.spyObj);
  }

  protected createSpyObj(
    baseName: string,
    methods: SpyObjMemberDef | string[],
    properties?: SpyObjMemberDef | string[]
  ): void {
    let methodsDef: SpyObjMemberDef = {};
    let propertiesDef: SpyObjMemberDef = {};
    let spyObj;

    methodsDef = normalizeMemberDef(methods);
    propertiesDef = normalizeMemberDef(properties);

    spyObj = createSpyObjViaJasmine(baseName, methodsDef, propertiesDef);
    spyObj = createSpyObjViaDef(spyObj, baseName, methodsDef, propertiesDef);

    this.spyObj = spyObj;
  }

  setReturn(method: string, returnValue: unknown): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.spyObj[method].and.returnValue(returnValue);
  }

  setProperty(property: string, returnValue: unknown): void {
    this[property] = returnValue;
  }
}
