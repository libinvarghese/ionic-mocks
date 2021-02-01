import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { MenuControllerMock, METHODS } from './menu-controller';
import { MenuMock } from './menu';

describe('MenuController', () => {
  let classUnderTest;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new MenuControllerMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    describe('enable', () => {
      it('should return Menu', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.enable()).toEqual(jasmine.any(Object));
      });
    });

    describe('get', () => {
      it('should return Menu', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.get()).toEqual(jasmine.any(Object));
      });
    });

    describe('getMenus', () => {
      it('should return Menus', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.getMenus()).toEqual([jasmine.any(Object)]);
      });
    });

    describe('getOpen', () => {
      it('should return Menu', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.getOpen()).toEqual(jasmine.any(Object));
      });
    });

    describe('swipeEnable', () => {
      it('should return Menu', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.swipeEnable()).toEqual(jasmine.any(Object));
      });
    });
  });

  describe('WHEN initialized with Alert', () => {
    let menu;

    beforeEach(() => {
      menu = new MenuMock();
      classUnderTest = new MenuControllerMock(menu);
    });

    describe('enable', () => {
      it('should return passed Menu', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.enable()).toBe(menu);
      });
    });

    describe('get', () => {
      it('should return passed Menu', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.get()).toBe(menu);
      });
    });

    describe('getMenus', () => {
      it('should contain Menu', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.getMenus()).toContain(menu);
      });
    });

    describe('getOpen', () => {
      it('should return passed Menu', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.getOpen()).toBe(menu);
      });
    });

    describe('swipeEnable', () => {
      it('should return passed Menu', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.swipeEnable()).toBe(menu);
      });
    });
  });
});
