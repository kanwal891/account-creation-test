module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns : [
    "node_modules/?!mui-tel-input",
    "node_modules/?!axios"
  ],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
