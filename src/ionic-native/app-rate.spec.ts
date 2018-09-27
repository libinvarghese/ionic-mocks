import { AppRateMock } from './app-rate';

describe('AppRateMock', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new AppRateMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    it('should contain preferences', () => {
        expect(classUnderTest.preferences).toBeDefined();
        expect(classUnderTest.preferences.storeAppURL).toBeDefined();
        expect(classUnderTest.preferences.callbacks).toBeDefined();
    });

    describe('promptForRating', () => {
        it('should be defined', () => {
            expect(classUnderTest.promptForRating).toBeDefined();
        });
    });

    describe('navigateToAppStore', () => {
        it('should be defined', () => {
            expect(classUnderTest.navigateToAppStore).toBeDefined();
        });
    });
});
