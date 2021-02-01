import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, TabsMock } from './tabs';
import { TabMock } from './tab';

describe('Tabs', () => {
  let classUnderTest;

  beforeEach(() => {
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  describe('WHEN initialized with default args', () => {
    beforeEach(() => {
      classUnderTest = new TabsMock();
    });

    it('should setup mock', async () => {
      await expectAsync(classUnderTest).toMatchMockObject();
    });

    describe('select', () => {
      it('should return Tab', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.select()).toBeInstanceOf(TabMock);
      });
    });

    describe('getSelected', () => {
      it('should return Tab', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.getSelected()).toBeInstanceOf(TabMock);
      });
    });

    describe('previousTab', () => {
      it('should return Tab', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        expect(classUnderTest.previousTab()).toBeInstanceOf(TabMock);
      });
    });
  });

  describe('WHEN constructor is initialized', () => {
    describe('select', () => {
      it('should return provided Tab', () => {
        const tab = new TabMock();
        classUnderTest = new TabsMock(tab);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.select() as TabMock;
        expect(result).toBe(tab);
      });
    });

    describe('getSelected', () => {
      it('should return provided Tab', () => {
        const tab = new TabMock();
        classUnderTest = new TabsMock(null, tab);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.getSelected() as TabMock;

        expect(result).toBe(tab);
      });
    });

    describe('previousTab', () => {
      it('should return provided Tab', () => {
        const tab = new TabMock();
        classUnderTest = new TabsMock(null, null, tab);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const result = classUnderTest.previousTab() as TabMock;

        expect(result).toBe(tab);
      });
    });
  });
});
