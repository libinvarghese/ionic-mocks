import { of } from 'rxjs';
import { mergeWith, union } from 'lodash';
import { BaseMock, normalizeMemberDef, SpyObjMemberDef } from '../base.mock';
import { NavParamsMock } from './nav-params';

export const METHODS: SpyObjMemberDef = {
  nameAndValues: {
    ...['willEnter', 'didEnter', 'willLeave', 'didLeave', 'willUnload', 'didUnload', 'subscribe'].reduce(
      (prev, curr) => {
        prev[curr] = of({});

        return prev;
      },
      {}
    ),
    ...{
      enableBack: true,
      isFirst: false,
      isLast: false,
      pageRef: {},
      getContent: {},
      hasNavbar: true,
      index: true,
      getNav: {},
      getIONContent: {},
    },
  },
  nameAndResolves: ['dismiss', 'onDidDismiss', 'onWillDismiss', 'contentRef'].reduce((prev, curr) => {
    prev[curr] = undefined;

    return prev;
  }, {}),
  names: [
    'setBackButtonText',
    'showBackButton',
    '_setHeader',
    '_setNavbar',
    '_setNav',
    '_setInstance',
    '_setIONContent',
    '_setContent',
    '_setContentRef',
    '_setFooter',
    '_setIONContentRef',
  ],
};

export const PROPERTIES: SpyObjMemberDef = {
  nameAndValues: {
    writeReady: {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      emit(): void {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
      subscribe(): any {},
    },
    readReady: {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      emit(): void {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
      subscribe(): any {},
    },
    component: {},
    data: new NavParamsMock(),
    instance: {},
    id: '',
  },
};

function mergeArrays(objArray, srcArray) {
  if (Array.isArray(objArray)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return union(objArray, srcArray);
  }
}

export class ViewControllerMock extends BaseMock {
  constructor(baseName = 'ViewController', methods = METHODS, properties = PROPERTIES) {
    let methodsDef: SpyObjMemberDef = {};
    let propertiesDef: SpyObjMemberDef = {};

    methodsDef = normalizeMemberDef(methods);
    propertiesDef = normalizeMemberDef(properties);

    if (baseName !== 'ViewController') {
      mergeWith(methodsDef, METHODS, mergeArrays);
      mergeWith(propertiesDef, PROPERTIES, mergeArrays);
    }

    super(baseName, methods, properties);
  }
}
