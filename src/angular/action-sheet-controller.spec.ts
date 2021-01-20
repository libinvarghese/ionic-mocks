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
            let result = await classUnderTest.create();

            expect(result).toBeDefined();
            expect(result.present).toBeDefined();
        });

       it('should return passed ActionSheet', async () => {
           let actionSheet = new ActionSheetMock();
           classUnderTest = new ActionSheetControllerMock(actionSheet);

           let result = await classUnderTest.create();
           expect(result).toBe(actionSheet);
        });
    });
});
