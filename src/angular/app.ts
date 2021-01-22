import { Observable, of } from 'rxjs';
import { NavControllerMock } from './nav-controller';
import { BaseMock } from '../base.mock';

const METHODS: string[] = [
  'getActiveNav',
  'getActiveNavs',
  'getNavByIdOrName',
  'getRootNav',
  'getRootNavs',
  'getRootNavById',
  'isScrolling',
  'setTitle',
  'viewDidEnter',
  'viewDidLeave',
  'viewDidLoad',
  'viewWillEnter',
  'viewWillLeave',
  'viewWillUnload',
];

export class AppMock extends BaseMock {
  constructor(navCtrl?: NavControllerMock, viewObservable?: Observable<any>) {
    super('App', METHODS);

    const navC = navCtrl || new NavControllerMock();
    const vo = viewObservable || of(undefined);

    this.setReturn('getActiveNav', navC);
    this.setReturn('getActiveNavs', [navC]);
    this.setReturn('getNavByIdOrName', navC);
    this.setReturn('getRootNav', navC);
    this.setReturn('getRootNavs', [navC]);
    this.setReturn('getRootNavById', navC);
    this.setReturn('isScrolling', false);
    this.setReturn('viewDidEnter', vo);
    this.setReturn('viewDidLoad', vo);
    this.setReturn('viewDidLeave', vo);
    this.setReturn('viewWillEnter', vo);
    this.setReturn('viewWillLeave', vo);
    this.setReturn('viewWillUnload', vo);
  }
}
