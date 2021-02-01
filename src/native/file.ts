import { BaseMock, SpyObjDef } from '../base.mock';

export const METHODS: SpyObjDef = {
  nameAndResolves: {
    ...{
      getFreeDiskSpace: 64,
      checkDir: true,
      checkFile: true,
      readAsText: 'a string',
      readAsDataURL: 'data:,some%20data',
      readAsBinaryString: '101010',
      readAsArrayBuffer: new ArrayBuffer(1),
    },
    ...[
      'createDir',
      'removeDir',
      'moveDir',
      'copyDir',
      'listDir',
      'removeRecursively',
      'createFile',
      'removeFile',
      'writeFile',
      'writeExistingFile',
      'moveFile',
      'copyFile',
      'resolveLocalFilesystemUrl',
      'resolveDirectoryUrl',
      'getDirectory',
      'getFile',
    ].reduce((prev, curr) => {
      prev[curr] = undefined;

      return prev;
    }, {}),
  },
};

export const PROPERTIES: SpyObjDef = {
  nameAndValues: {
    applicationDirectory: 'a-directory',
    applicationStorageDirectory: 'a-directory',
    dataDirectory: 'a-directory',
    cacheDirectory: 'a-directory',
    externalApplicationStorageDirectory: 'a-directory',
    externalDataDirectory: 'a-directory',
    externalCacheDirectory: 'a-directory',
    externalRootDirectory: 'a-directory',
    tempDirectory: 'a-directory',
    syncedDataDirectory: 'a-directory',
    documentsDirectory: 'a-directory',
    sharedDirectory: 'a-directory',
  },
  names: ['cordovaFileError'],
};

export class FileMock extends BaseMock {
  constructor() {
    super('File', METHODS, PROPERTIES);
  }
}
