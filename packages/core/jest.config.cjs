module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '@/(.*)': ['<rootDir>/src/$1']
  },
  moduleDirectories: ['node_modules', 'src']
}
