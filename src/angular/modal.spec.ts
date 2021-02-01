import { mockObjectCustomMatchers } from '../spec/custom-matchers';
import { METHODS, ModalMock } from './modal';

describe('Modal', () => {
  let classUnderTest;

  beforeEach(() => {
    classUnderTest = new ModalMock();
    jasmine.addAsyncMatchers(mockObjectCustomMatchers(METHODS));
  });

  it('should setup mock', async () => {
    await expectAsync(classUnderTest).toMatchMockObject();
  });
});
