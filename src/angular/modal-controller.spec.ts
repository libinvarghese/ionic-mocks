import { ModalControllerMock } from './modal-controller';
import { ModalMock } from './modal';

describe('ModalController', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ModalControllerMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('create', () => {

        it('should exist', () => {
            expect(classUnderTest.create).toBeDefined();
        });

        it('should return a Modal', () => {
            const result = classUnderTest.create();

            expect(result).toBeDefined();
            expect(result.present).toBeDefined();
        });

        it('should return provided Modal', () => {
            const modal = new ModalMock();
            classUnderTest = new ModalControllerMock(modal);

            const result = classUnderTest.create();

            expect(result).toBe(modal);
        });
    });

});
