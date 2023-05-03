// import type {Config} from 'jest';

// const config: Config = {
//   verbose: true,
// };

// export default config;
/* module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
} */;
module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  testEnvironment: 'jsdom',
  transform: {
    // "^.+\\.tsx?$": "ts-jest"
    // '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(ts|tsx)$": "ts-jest"
    // "^.+\\.(js|jsx)$": "babel-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
 /*  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect"
  ], */

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};