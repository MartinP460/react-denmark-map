module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '@/(.*)': ['<rootDir>/src/$1'],
    '^react$': '<rootDir>/../../node_modules/react/index.js',
  }
}
