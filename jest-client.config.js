module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/(components|modules)/.*(\\.|/)(test|spec))\\.(tsx?|ts?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['.next'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/__mocks__/fileMock.js',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'modules/*.{js,jsx,ts,tsx}',
        'components/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    globals: {
        'ts-jest': {
            diagnostics: false,
            babelConfig: '.babelrc',
            tsConfig: './jest-tsconfig.json',
        },
    },
    rootDir: process.cwd(),
};
