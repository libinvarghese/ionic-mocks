import { AppVersionMock } from './app-version';

describe('AppVersionMock', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new AppVersionMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('getAppName', () => {
        it('should be defined', () => {
            expect(classUnderTest.getAppName).toBeDefined();
        });
    });

    describe('getPackageName', () => {
        it('should be defined', () => {
            expect(classUnderTest.getPackageName).toBeDefined();
        });
    });

    describe('getVersionCode', () => {
        it('should be defined', () => {
            expect(classUnderTest.getVersionCode).toBeDefined();
        });
    });

    describe('getVersionNumber', () => {
        it('should be defined', () => {
            expect(classUnderTest.getVersionNumber).toBeDefined();
        });
    });
});
