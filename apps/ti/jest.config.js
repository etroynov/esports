module.exports = {
  name: 'ti',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ti',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
