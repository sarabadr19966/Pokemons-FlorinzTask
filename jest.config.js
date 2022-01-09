module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupTests.js'],
  moduleNameMapper: {
    '\\.(eot|otf|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(scss|css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': require.resolve('./__mock__/images.js'),
  },
};
