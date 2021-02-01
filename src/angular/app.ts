import { Observable, of } from 'rxjs';
import { BaseMock, SpyObjMemberDef } from '../base.mock';
import { NavControllerMock } from './nav-controller';

export const METHODS: SpyObjMemberDef = {
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
  constructor(navCtrl?: NavControllerMock, viewObservable?: Observable<unknown>) {
    super('App', METHODS);

    const navC = navCtrl || new NavControllerMock();
    const vo = viewObservable || of(undefined);

    this.setReturn('getActiveNav', navC);
    this.setReturn('getActiveNavs', [navC]);
    this.setReturn('getNavByIdOrName', navC);
    this.setReturn('getRootNav', navC);
    this.setReturn('getRootNavs', [navC]);
    this.setReturn('getRootNavById', navC);
    this.setReturn('viewDidEnter', vo);
    this.setReturn('viewDidLoad', vo);
    this.setReturn('viewDidLeave', vo);
    this.setReturn('viewWillEnter', vo);
    this.setReturn('viewWillLeave', vo);
    this.setReturn('viewWillUnload', vo);
  }
}
