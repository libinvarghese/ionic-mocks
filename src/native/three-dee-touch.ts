import { of } from 'rxjs';
import { BaseMock, SpyObjMemberDef } from '../base.mock';

export const METHODS: SpyObjMemberDef = {
  names: ['configureQuickActions', 'enableLinkPreview', 'disableLinkPreview'],
  nameAndResolves: {
    isAvailable: true,
  },
  nameAndValues: {
    // eslint-disable-next-line rxjs/finnish
    watchForTouches: of({}),
    // eslint-disable-next-line rxjs/finnish
    onHomeIconPressed: of(undefined),
  },
};

export class ThreeDeeTouchMock extends BaseMock {
  constructor() {
    super('ThreeDeeTouch', METHODS);
  }
}
