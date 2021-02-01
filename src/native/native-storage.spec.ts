import { NativeStorage } from './native-storage';

describe('NativeStorage', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new NativeStorage();
  });

  it('should be defined', () => {
    expect(classUnderTest).toBeDefined();
  });

  describe('setItem', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.setItem).toBeDefined();
    });

    it('should return empty Promise', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await expectAsync(classUnderTest.setItem()).toBeResolvedTo(undefined);
    });

    it('should return provided item', async () => {
      const item = { val: 'random' };
      classUnderTest = new NativeStorage(item);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await expectAsync(classUnderTest.setItem()).toBeResolvedTo(item);
    });
  });

  describe('getItem', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.getItem).toBeDefined();
    });

    it('should return Promise', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await expectAsync(classUnderTest.getItem()).toBeResolvedTo(undefined);
    });

    it('should return provided item', async () => {
      const item = { val: 'random' };
      classUnderTest = new NativeStorage(item);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await expectAsync(classUnderTest.getItem()).toBeResolvedTo(item);
    });
  });

  describe('keys', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.keys).toBeDefined();
    });

    it('should return Promise', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await expectAsync(classUnderTest.getItem()).toBeResolvedTo(undefined);
    });

    it('should return provided keys', async () => {
      const keys = ['one', 'two'];
      classUnderTest = new NativeStorage(null, keys);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await expectAsync(classUnderTest.keys()).toBeResolvedTo(keys);
    });
  });

  describe('remove', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.remove).toBeDefined();
    });

    it('should return empty Promise', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await expectAsync(classUnderTest.remove()).toBeResolvedTo(undefined);
    });
  });

  describe('clear', () => {
    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(classUnderTest.clear).toBeDefined();
    });

    it('should return empty Promise', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await expectAsync(classUnderTest.clear()).toBeResolvedTo(undefined);
    });
  });
});
