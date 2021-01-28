import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, PROPERTIES, StorageMock } from './storage';

describe('StorageMock', () => {
  let classUnderTest;
  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS, PROPERTIES));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new StorageMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    describe('length', () => {
      it('should return spyable Promise that resolves to 0', async () => {
        await expectAsync(classUnderTest.length()).toBeResolvedTo(0);
      });
    });

    describe('keys', () => {
      it('should return spyable Promise that resolves to list key', async () => {
        await expectAsync(classUnderTest.keys()).toBeResolvedTo([]);
      });
    });

    describe('forEach', () => {
      it('should return spyable Promise', async () => {
        const spyIterator = jasmine.createSpy('spyIterator');
        await expectAsync(classUnderTest.forEach(spyIterator)).toBeResolvedTo(undefined);
        expect(spyIterator).toHaveBeenCalledTimes(0);
      });
    });

    describe('set', () => {
      it('should be defined', () => {
        expect(classUnderTest.set).toBeDefined();
      });

      it('should return spyable Promise', async () => {
        await expectAsync(classUnderTest.set('foo', 'bar')).toBeResolvedTo(undefined);
      });
    });

    describe('WHEN key is present', () => {
      beforeEach(async () => {
        await classUnderTest.set('foo', 'bar');
      });

      describe('get', () => {
        it('should return spyable Promise with passed parameter', async () => {
          await expectAsync(classUnderTest.get('foo')).toBeResolvedTo('bar');
        });
      });

      describe('remove', () => {
        it('should return spyable Promise', async () => {
          await expectAsync(classUnderTest.remove('foo')).toBeResolvedTo(undefined);
          await expectAsync(classUnderTest.get('foo')).toBeResolvedTo(null);
        });
      });

      describe('clear', () => {
        it('should return spyable Promise', async () => {
          await expectAsync(classUnderTest.clear()).toBeResolvedTo(undefined);
          await expectAsync(classUnderTest.get('foo')).toBeResolvedTo(null);
        });
      });

      describe('length', () => {
        it('should return spyable Promise that resolves to 1', async () => {
          await expectAsync(classUnderTest.length()).toBeResolvedTo(1);
        });
      });

      describe('keys', () => {
        it('should return spyable Promise that resolves to list key', async () => {
          await expectAsync(classUnderTest.keys()).toBeResolvedTo(['foo']);
        });
      });

      describe('forEach', () => {
        it('should return spyable Promise', async () => {
          const spyIterator = jasmine.createSpy('spyIterator');
          await expectAsync(classUnderTest.forEach(spyIterator)).toBeResolvedTo(undefined);
          expect(spyIterator).toHaveBeenCalledOnceWith('bar', 'foo', 0);
        });
      });
    });
  });

  describe('WHEN initialized with existing storage', () => {
    beforeEach(() => {
      classUnderTest = new StorageMock({ abc: 'xyz' });
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    describe('length', () => {
      it('should return spyable Promise that resolves to 0', async () => {
        await expectAsync(classUnderTest.length()).toBeResolvedTo(1);
      });
    });

    describe('keys', () => {
      it('should return spyable Promise that resolves to list key', async () => {
        await expectAsync(classUnderTest.keys()).toBeResolvedTo(['abc']);
      });
    });

    describe('forEach', () => {
      it('should return spyable Promise', async () => {
        const spyIterator = jasmine.createSpy('spyIterator');
        await expectAsync(classUnderTest.forEach(spyIterator)).toBeResolvedTo(undefined);
        expect(spyIterator).toHaveBeenCalledOnceWith('xyz', 'abc', 0);
      });
    });

    describe('get', () => {
      it('should return spyable Promise with passed parameter', async () => {
        await expectAsync(classUnderTest.get('abc')).toBeResolvedTo('xyz');
      });
    });

    describe('remove', () => {
      it('should return spyable Promise', async () => {
        await expectAsync(classUnderTest.remove('abc')).toBeResolvedTo(undefined);
        await expectAsync(classUnderTest.get('abc')).toBeResolvedTo(null);
      });
    });

    describe('clear', () => {
      it('should return spyable Promise', async () => {
        await expectAsync(classUnderTest.clear()).toBeResolvedTo(undefined);
        await expectAsync(classUnderTest.get('abc')).toBeResolvedTo(null);
      });
    });

    describe('set', () => {
      it('should be defined', () => {
        expect(classUnderTest.set).toBeDefined();
      });

      it('should return spyable Promise', async () => {
        await expectAsync(classUnderTest.set('foo', 'bar')).toBeResolvedTo(undefined);
      });
    });

    describe('WHEN key is added', () => {
      beforeEach(async () => {
        await classUnderTest.set('foo', 'bar');
      });

      describe('get', () => {
        it('should return spyable Promise with passed parameter', async () => {
          await expectAsync(classUnderTest.get('foo')).toBeResolvedTo('bar');
        });
      });

      describe('remove', () => {
        it('should return spyable Promise', async () => {
          await expectAsync(classUnderTest.remove('foo')).toBeResolvedTo(undefined);
          await expectAsync(classUnderTest.get('foo')).toBeResolvedTo(null);
        });
      });

      describe('clear', () => {
        it('should return spyable Promise', async () => {
          await expectAsync(classUnderTest.clear()).toBeResolvedTo(undefined);
          await expectAsync(classUnderTest.get('foo')).toBeResolvedTo(null);
        });
      });

      describe('length', () => {
        it('should return spyable Promise that resolves to 1', async () => {
          await expectAsync(classUnderTest.length()).toBeResolvedTo(2);
        });
      });

      describe('keys', () => {
        it('should return spyable Promise that resolves to list key', async () => {
          await expectAsync(classUnderTest.keys()).toBeResolvedTo(['abc', 'foo']);
        });
      });

      describe('forEach', () => {
        it('should return spyable Promise', async () => {
          const spyIterator = jasmine.createSpy('spyIterator');
          await expectAsync(classUnderTest.forEach(spyIterator)).toBeResolvedTo(undefined);
          expect(spyIterator).toHaveBeenCalledWith('xyz', 'abc', 0);
          expect(spyIterator).toHaveBeenCalledWith('bar', 'foo', 1);
        });
      });
    });
  });
});
