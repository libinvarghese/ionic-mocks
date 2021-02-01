import { NetworkMock } from './network';

describe('Network', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new NetworkMock();
  });

  it('should be defined', () => {
    expect(classUnderTest).toBeDefined();
  });

  describe('type', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.type).toBeDefined();
    });

    it('should return wifi', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.type()).toEqual('wifi');
    });

    it('should return provided type', () => {
      const network = 'anything';
      classUnderTest = new NetworkMock(network);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.type()).toBe(network);
    });
  });

  describe('downlinkMax', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.downlinkMax).toBeDefined();
    });

    it('should return 42', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.downlinkMax()).toEqual('42');
    });
  });

  describe('onchange', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.onchange).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.onchange().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('onDisconnect', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.onDisconnect).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.onDisconnect().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('onConnect', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.onConnect).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.onConnect().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });
});
