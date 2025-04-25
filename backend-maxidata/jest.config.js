module.exports = {
        preset: 'ts-jest',
        testEnvironment: 'node',
        roots: ['<rootDir>/src'],
        moduleFileExtensions: ['ts', 'js', 'json'],
        transform: {
          '^.+\\.(t|j)s$': 'ts-jest',
        },
        collectCoverageFrom: [
          '**/*.(t|j)s',
        ],
        coverageDirectory: './coverage',
        testRegex: '.*\\.spec\\.ts$',  
      }
      