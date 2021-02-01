import { NFCMock } from './nfc';

describe('NFC', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new NFCMock();
  });

  it('should be defined', () => {
    expect(classUnderTest).toBeDefined();
  });

  describe('addNdefListener', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.addNdefListener).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.addNdefListener().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('addTagDiscoveredListener', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.addTagDiscoveredListener).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.addTagDiscoveredListener().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('addMimeTypeListener', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.addMimeTypeListener).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.addMimeTypeListener().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('addNdefFormatableListener', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.addNdefFormatableListener).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.addNdefFormatableListener().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('write', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.write).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.write().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('makeReadyOnly', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.makeReadyOnly).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.makeReadyOnly().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('share', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.share).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.share().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('unshare', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.unshare).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.unshare().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('erase', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.erase).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.erase().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('handover', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.handover).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.handover().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('stopHandover', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.stopHandover).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.stopHandover().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('showSettings', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.showSettings).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.showSettings().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('enabled', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.enabled).toBeDefined();
    });

    it('should return empty observable', done => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      classUnderTest.enabled().subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });
    });
  });

  describe('bytesToString', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.bytesToString).toBeDefined();
    });

    it('should return empty string', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.bytesToString()).toEqual('');
    });
  });

  describe('stringToBytes', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.stringToBytes).toBeDefined();
    });

    it('should return empty array', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.stringToBytes()).toEqual([]);
    });
  });

  describe('bytesToHexString', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.bytesToHexString).toBeDefined();
    });

    it('should return empty string', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.bytesToHexString()).toEqual('');
    });
  });
});
