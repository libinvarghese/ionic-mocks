import { AlertMock } from './alert';
import { AlertControllerMock } from './alert-controller';

describe('AlertControllerMock', () => {

    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new AlertControllerMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('create', () => {

        it('should exist', () => {
            expect(classUnderTest.create).toBeDefined();
        });

        it('should return an Alert', async () => {
            let result = await classUnderTest.create();

            expect(result).toBeDefined();
            expect(result.present).toBeDefined();
        });

       it('should return passed Alert', async () => {
           let actionSheet = new AlertMock();
           classUnderTest = new AlertControllerMock(actionSheet);

           let result = await classUnderTest.create();

           expect(result).toBe(actionSheet);
        });
    });
});
