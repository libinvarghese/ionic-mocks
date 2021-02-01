import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, PROPERTIES, ViewControllerMock } from './view-controller';

describe('ViewControllerMock', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new ViewControllerMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS, PROPERTIES));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });

  describe('willEnter', () => {
    it('should return empty Observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.willEnter().subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });

  describe('didEnter', () => {
    it('should return empty Observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.didEnter().subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });

  describe('willLeave', () => {
    it('should return empty Observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.willLeave().subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });

  describe('didLeave', () => {
    it('should return empty Observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.didLeave().subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });

  describe('willUnload', () => {
    it('should return empty Observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.willUnload().subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });

  describe('didUnload', () => {
    it('should return empty Observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.didUnload().subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });

  describe('subscribe', () => {
    it('should return empty Observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.subscribe().subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });
});
