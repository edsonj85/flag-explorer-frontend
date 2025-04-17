module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.spec.[jt]s'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // This is correct
    },
    collectCoverage: true, // Collect test coverage
    coverageReporters: ['html', 'text-summary'], // Define coverage reports
}

