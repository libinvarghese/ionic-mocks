export type SpyObjMembers<T> = Record<string, T>;

export interface SpyObjMemberDef {
  names?: string[];
  nameAndValues?: SpyObjMembers<unknown>;
  nameAndCallFakes?: SpyObjMembers<<O>(...args: any) => O>;
  nameAndRejects?: SpyObjMembers<unknown>;
  nameAndResolves?: SpyObjMembers<unknown>;
  nameAndThrows?: SpyObjMembers<Error | object | string>;
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
  let spyObj;
  const jasmineMethods = methods.nameAndValues || methods.names;

  if (jasmineMethods != null) {
    // Bug - https://github.com/jasmine/jasmine/issues/1837
    // This has been fixed. Please watch for next release
    // this.spyObj = jasmine.createSpyObj(baseName, methods, properties);
    // Workaround for Bug - https://github.com/jasmine/jasmine/issues/1837 -> this.createSpyObj
    spyObj = jasmine.createSpyObj(baseName, jasmineMethods);

    const jasmineProperties = properties?.nameAndValues || properties?.names;
    addPropertiesToSpyObj(spyObj, baseName, jasmineProperties);
  }

  return spyObj;
}

function createSpyObjViaDef(spyObj: object, baseName: string, methods: SpyObjMemberDef, properties?: SpyObjMemberDef) {
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
  spyObj: object,
  baseName: string,
  members: SpyObjMemberDef,
  addMembersFn: <T>(
    spyObj: object,
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
  spyObj: object,
  baseName: string,
  methods: SpyObjMembers<T> | string[],
  spyStrategy = 'returnValue'
) {
  const obj = spyObj;
  const methodsArr = normalizeKeyValues(methods);
  methodsArr.forEach(element => {
    const spy = jasmine.createSpy(baseName + '.' + element[0]);
    if (element.length > 1) {
      if (spyStrategy === 'returnValues') {
        spy.and.returnValues(...element[1]);
      } else {
        spy.and[spyStrategy](element[1]);
      }
    }

    obj[element[0]] = spy;
  });
}

function addPropertiesToSpyObj(
  spyObj: object,
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
        descriptor.get.and.returnValues(...element[1]);
        descriptor.set.and.returnValues(...element[1]);
      } else {
        descriptor.get.and[spyStrategy](element[1]);
        descriptor.set.and[spyStrategy](element[1]);
      }
    }
    Object.defineProperty(obj, element[0], descriptor);
  });
}

function normalizeKeyValues(object) {
  const result = [];
  if (Array.isArray(object)) {
    for (let i = 0; i < object.length; i++) {
      result.push([object[i]]);
    }
  } else if (object instanceof Object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        result.push([key, object[key]]);
      }
    }
  }
  return result;
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
  ) {
    let methodsDef: SpyObjMemberDef = {};
    let propertiesDef: SpyObjMemberDef = {};
    let spyObj;

    if (Array.isArray(methods)) {
      methodsDef.names = methods;
    } else {
      methodsDef = methods;
    }

    if (Array.isArray(properties)) {
      propertiesDef.names = properties;
    } else {
      propertiesDef = properties;
    }

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
