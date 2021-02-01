import { of } from 'rxjs';
import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  names: ['pause', 'resize', 'setDir', 'setLang', 'testUserAgent'],
  nameAndResolves: {
    ready: undefined,
  },
  nameAndValues: {
    dir: '',
    getQueryParam: '',
    height: 0,
    is: true,
    isLandscape: false,
    isPortrait: true,
    isRTL: false,
    lang: 'en',
    platforms: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-module-boundary-types
    registerBackButtonAction: () => {},
    // eslint-disable-next-line rxjs/finnish
    resume: of(undefined),
    url: '',
    versions: {},
    width: 0,
    doc: document,
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-module-boundary-types
    registerListener: () => {},
    win: window,
    getActiveElement: document['activeElement'],
    raf: 1,
    hasFocus: true,
    getElementComputedStyle: {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    },
    timeout: setTimeout,
  },
};

export class PlatformMock extends BaseMock {
  constructor() {
    super('Platform', METHODS);
  }
}
