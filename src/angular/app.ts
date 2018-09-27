import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { NavControllerMock } from './nav-controller';
import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

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
    'viewWillUnload'
];

export class AppMock extends BaseMock {
    constructor(private _navCtrl?: NavControllerMock, private _viewObservable?: Observable<any>) {
        super('App', METHODS);

        this.setReturn('getActiveNav', _navCtrl || new NavControllerMock());
        this.setReturn('getActiveNavs', _navCtrl || [new NavControllerMock()]);
        this.setReturn('getNavByIdOrName', _navCtrl || new NavControllerMock());
        this.setReturn('getRootNav', _navCtrl || new NavControllerMock());
        this.setReturn('getRootNavs', _navCtrl || [new NavControllerMock()]);
        this.setReturn('getRootNavById', _navCtrl || new NavControllerMock());
        this.setReturn('isScrolling', false);
        this.setReturn('viewDidEnter', _viewObservable || of(undefined));
        this.setReturn('viewDidLoad', _viewObservable || of(undefined));
        this.setReturn('viewDidLeave', _viewObservable || of(undefined));
        this.setReturn('viewWillEnter', _viewObservable || of(undefined));
        this.setReturn('viewWillLeave', _viewObservable || of(undefined));
        this.setReturn('viewWillUnload', _viewObservable || of(undefined));
    }

    @deprecated('new AppMock()')
    public static instance(navCtrl?: NavControllerMock, viewObservable?: Observable<any>): any {
        return new AppMock(navCtrl, viewObservable);
    }
}
