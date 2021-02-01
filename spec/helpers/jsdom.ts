// eslint-disable-next-line node/no-unpublished-import
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<html><body></body></html>');
global.document = dom.window.document;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
global.window = dom.window as any;
global.navigator = dom.window.navigator;
