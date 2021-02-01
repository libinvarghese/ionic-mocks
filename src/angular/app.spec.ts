import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { AppMock, METHODS } from './app';
import { NavControllerMock } from './nav-controller';

describe('AppMock', () => {
  let classUnderTest;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new AppMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    describe('getActiveNav', () => {
      it('should return a NavController', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getActiveNav() as NavControllerMock;
        expect(result).toBeDefined();
      });
    });

    describe('getActiveNavs', () => {
      it('should return a NavController array', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getActiveNavs() as NavControllerMock;

        expect(result).toBeDefined();
      });
    });

    describe('getNavByIdOrName', () => {
      it('should return a nav', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getNavByIdOrName(1) as NavControllerMock;

        expect(result).toBeDefined();
      });
    });

    describe('getRootNav', () => {
      it('should return a nav', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getRootNav() as NavControllerMock;

        expect(result).toBeDefined();
      });
    });

    describe('getRootNavs', () => {
      it('should return a NavController array', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getRootNavs() as NavControllerMock;

        expect(result).toBeDefined();
      });
    });

    describe('getRootNavById', () => {
      it('should return a nav', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getRootNavById(1) as NavControllerMock;

        expect(result).toBeDefined();
      });
    });

    describe('viewDidEnter', () => {
      it('should return empty Observable', done => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        classUnderTest.viewDidEnter().subscribe(result => {
          expect(result).toBeUndefined();
          done();
        });
      });
    });

    describe('viewDidLeave', () => {
      it('should return empty Observable', done => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        classUnderTest.viewDidLeave().subscribe(result => {
          expect(result).toBeUndefined();
          done();
        });
      });
    });

    describe('viewWillEnter', () => {
      it('should return empty Observable', done => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        classUnderTest.viewWillEnter().subscribe(result => {
          expect(result).toBeUndefined();
          done();
        });
      });
    });

    describe('viewWillLeave', () => {
      it('should return empty Observable', done => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        classUnderTest.viewDidLeave().subscribe(result => {
          expect(result).toBeUndefined();
          done();
        });
      });
    });

    describe('viewWillUnLoad', () => {
      it('should return empty Observable', done => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        classUnderTest.viewWillUnload().subscribe(result => {
          expect(result).toBeUndefined();
          done();
        });
      });
    });
  });

  describe('WHEN initialized with NavCtrl', () => {
    let navCtrl;

    beforeEach(() => {
      navCtrl = new NavControllerMock();
      classUnderTest = new AppMock(navCtrl);
    });

    describe('getActiveNav', () => {
      it('should return passed nav', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getActiveNav() as NavControllerMock;
        expect(result).toBe(navCtrl);
      });
    });

    describe('getActiveNavs', () => {
      it('should return passed nav', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getActiveNav() as NavControllerMock;

        expect(result).toContain(navCtrl);
      });
    });

    describe('getNavByIdOrName', () => {
      it('should return passed nav', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getNavByIdOrName(1) as NavControllerMock;

        expect(result).toBe(navCtrl);
      });
    });

    describe('getRootNav', () => {
      it('should return passed nav', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getRootNav() as NavControllerMock;

        expect(result).toBe(navCtrl);
      });
    });

    describe('getRootNavs', () => {
      it('should return passed nav', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getRootNavs() as NavControllerMock;

        expect(result).toContain(navCtrl);
      });
    });

    describe('getRootNavById', () => {
      it('should return passed nav', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getRootNavById(1) as NavControllerMock;

        expect(result).toBe(navCtrl);
      });
    });
  });
});
