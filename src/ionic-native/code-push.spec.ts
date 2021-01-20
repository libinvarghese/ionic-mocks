import { CodePushMock } from './code-push';

describe('CodePushMock', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new CodePushMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('getCurrentPackage', () => {
        it('should be defined', () => {
            expect(classUnderTest.getCurrentPackage).toBeDefined();
        });
    });

    describe('getPendingPackage', () => {
        it('should be defined', () => {
            expect(classUnderTest.getPendingPackage).toBeDefined();
        });
    });

    describe('checkForUpdate', () => {
        it('should be defined', () => {
            expect(classUnderTest.checkForUpdate).toBeDefined();
        });
    });

    describe('notifyApplicationReady', () => {
        it('should be defined', () => {
            expect(classUnderTest.notifyApplicationReady).toBeDefined();
        });
    });

    describe('restartApplication', () => {
        it('should be defined', () => {
            expect(classUnderTest.restartApplication).toBeDefined();
        });
    });

    describe('sync', () => {
        it('should be defined', () => {
            expect(classUnderTest.sync).toBeDefined();
        });
    });
});
