module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      '/node_modules/',
      '\\.pnp\\.[^\\/]+$',
    ],
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/styleMock.js',
    },
};