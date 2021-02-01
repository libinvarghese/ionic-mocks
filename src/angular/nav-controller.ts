import { of } from 'rxjs';
import { BaseMock, SpyObjMemberDef } from '../base.mock';
import { ViewControllerMock } from './view-controller';

export const METHODS: SpyObjMemberDef = {
  nameAndResolves: [
    'goToRoot',
    'push',
    'insert',
    'insertPage',
    'pop',
    'popTo',
    'popToRoot',
    'popAll',
    'remove',
    'removeView',
    'setRoot',
    'setPages',
  ].reduce((prev, curr) => {
    prev[curr] = undefined;

    return prev;
  }, {}),
  nameAndValues: {
    ...{
      initPane: 1,
      hasChildren: true,
      canSwipeBack: true,
      canGoBack: true,
      isTransitioning: false,
      isActive: true,
      indexOf: 0,
      getViews: [],
      isSwipeBackEnabled: true,
      length: 0,
    },
    ...['getActive', 'getByIndex', 'getPrevious', 'first', 'last'].reduce((prev, curr) => {
      prev[curr] = new ViewControllerMock();

      return prev;
    }, {}),
    ...['viewDidEnter', 'viewDidLeave', 'viewDidLoad', 'viewWillEnter', 'viewWillLeave', 'viewWillUnload'].reduce(
      (prev, curr) => {
        prev[curr] = of();

        return prev;
      },
      {}
    ),
  },
  names: [
    'paneChanged',
    'getActiveChildNav',
    'registerChildNav',
    'unregisterChildNav',
    'destroy',
    'swipeBackStart',
    'swipeBackProgress',
    'swipeBackEnd',
    'setTransitioning',
    'dismissPageChangeViews',
    'setViewPort',
    'resize',
  ],
};

export const PROPERTIES: SpyObjMemberDef = {
  nameAndValues: {
    root: new ViewControllerMock(),
    rootParams: {},
  },
};

export class NavControllerMock extends BaseMock {
  constructor() {
    super('NavController', METHODS, PROPERTIES);
  }
}
