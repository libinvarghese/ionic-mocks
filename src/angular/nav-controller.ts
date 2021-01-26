import { of } from 'rxjs';
import { ViewControllerMock } from './view-controller';
import { BaseMock } from '../base.mock';

const METHODS = [
    'goToRoot',
    'initPane',
    'paneChanged',
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
    'hasChildren',
    'getActiveChildNav',
    'registerChildNav',
    'unregisterChildNav',
    'destroy',
    'swipeBackStart',
    'swipeBackProgress',
    'swipeBackEnd',
    'canSwipeBack',
    'canGoBack',
    'isTransitioning',
    'setTransitioning',
    'getActive',
    'isActive',
    'getByIndex',
    'getPrevious',
    'first',
    'last',
    'indexOf',
    'length',
    'getViews',
    'isSwipeBackEnabled',
    'dismissPageChangeViews',
    'setViewPort',
    'resize',
    'viewDidEnter',
    'viewDidLeave',
    'viewDidLoad',
    'viewWillEnter',
    'viewWillLeave',
    'viewWillUnload'
];

export class NavControllerMock extends BaseMock {
    constructor() {
        super('NavController', METHODS);

        this.setReturn('goToRoot', Promise.resolve());
        this.setReturn('initPane', 1);
        this.setReturn('push', Promise.resolve());
        this.setReturn('insert', Promise.resolve());
        this.setReturn('insertPage', Promise.resolve());
        this.setReturn('pop', Promise.resolve());
        this.setReturn('popTo', Promise.resolve());
        this.setReturn('popToRoot', Promise.resolve());
        this.setReturn('popAll', Promise.resolve());
        this.setReturn('remove', Promise.resolve());
        this.setReturn('removeView', Promise.resolve());
        this.setReturn('setRoot', Promise.resolve());
        this.setReturn('setPages', Promise.resolve());
        this.setReturn('hasChildren', true);
        this.setReturn('canSwipeBack', true);
        this.setReturn('canGoBack', true);
        this.setReturn('isTransitioning', false);
        this.setReturn('isActive', true);
        this.setReturn('getActive', new ViewControllerMock());
        this.setReturn('getByIndex', new ViewControllerMock());
        this.setReturn('getPrevious', new ViewControllerMock());
        this.setReturn('first', new ViewControllerMock());
        this.setReturn('last', new ViewControllerMock());
        this.setReturn('indexOf', 0);
        this.setReturn('getViews', []);
        this.setReturn('isSwipeBackEnabled', true);
        this.setReturn('viewDidEnter', of());
        this.setReturn('viewDidLeave', of());
        this.setReturn('viewDidLoad', of());
        this.setReturn('viewWillEnter', of());
        this.setReturn('viewWillLeave', of());
        this.setReturn('viewWillUnload', of());
        this.setReturn('length', 0);
        this.setProperty('root', new ViewControllerMock());
        this.setProperty('rootParams', {});
    }
}
