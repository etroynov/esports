module.exports = {
  name: 'ds',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ds',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
