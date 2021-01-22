import { ActionSheetControllerMock } from './action-sheet-controller';
import { ActionSheetMock } from './action-sheet';

describe('ActionSheetControllerMock', () => {

    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ActionSheetControllerMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('create', () => {

        it('should exist', () => {
            expect(classUnderTest.create).toBeDefined();
        });

        it('should return an ActionSheet', async () => {
            const result = await classUnderTest.create();

            expect(result).toBeDefined();
            expect(result.present).toBeDefined();
        });

        it('should return passed ActionSheet', async () => {
           const actionSheet = new ActionSheetMock();
           classUnderTest = new ActionSheetControllerMock(actionSheet);

           const result = await classUnderTest.create();
           expect(result).toBe(actionSheet);
        });
    });
});
