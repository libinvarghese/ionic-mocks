import { Observable, of } from 'rxjs';
import { BaseMock, SpyObjDef } from '../base.mock';
import { NavControllerMock } from './nav-controller';

export const METHODS: SpyObjDef = {
  nameAndValues: {
    isScrolling: false,
  },
  names: [
    'getActiveNav',
    'getActiveNavs',
    'getNavByIdOrName',
    'getRootNav',
    'getRootNavs',
    'getRootNavById',
    'setTitle',
    'viewDidEnter',
    'viewDidLeave',
    'viewDidLoad',
    'viewWillEnter',
    'viewWillLeave',
    'viewWillUnload',
  ],
};

export class AppMock extends BaseMock {
  constructor(navCtrl?: NavControllerMock, view$?: Observable<unknown>) {
    super('App', METHODS);

    const navC = navCtrl || new NavControllerMock();
    const v$ = view$ || of(undefined);

    this.setReturn('getActiveNav', navC);
    this.setReturn('getActiveNavs', [navC]);
    this.setReturn('getNavByIdOrName', navC);
    this.setReturn('getRootNav', navC);
    this.setReturn('getRootNavs', [navC]);
    this.setReturn('getRootNavById', navC);
    this.setReturn('viewDidEnter', v$);
    this.setReturn('viewDidLoad', v$);
    this.setReturn('viewDidLeave', v$);
    this.setReturn('viewWillEnter', v$);
    this.setReturn('viewWillLeave', v$);
    this.setReturn('viewWillUnload', v$);
  }
}
