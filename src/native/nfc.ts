import { of } from 'rxjs';
import { BaseMock } from '../base.mock';

const METHODS = [
  'addNdefListener',
  'addTagDiscoveredListener',
  'addMimeTypeListener',
  'addNdefFormatableListener',
  'write',
  'makeReadyOnly',
  'share',
  'unshare',
  'erase',
  'handover',
  'stopHandover',
  'showSettings',
  'enabled',
  'bytesToString',
  'stringToBytes',
  'bytesToHexString',
];
export class NFCMock extends BaseMock {
  constructor() {
    super('NFC', METHODS);
    this.setReturn('addNdefListener', of(undefined));
    this.setReturn('addTagDiscoveredListener', of(undefined));
    this.setReturn('addMimeTypeListener', of(undefined));
    this.setReturn('addNdefFormatableListener', of(undefined));
    this.setReturn('write', of(undefined));
    this.setReturn('makeReadyOnly', of(undefined));
    this.setReturn('share', of(undefined));
    this.setReturn('unshare', of(undefined));
    this.setReturn('erase', of(undefined));
    this.setReturn('handover', of(undefined));
    this.setReturn('stopHandover', of(undefined));
    this.setReturn('showSettings', of(undefined));
    this.setReturn('enabled', of(undefined));
    this.setReturn('bytesToString', '');
    this.setReturn('stringToBytes', []);
    this.setReturn('bytesToHexString', '');
  }
}
