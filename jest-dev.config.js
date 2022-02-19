module.exports = {
    projects: [
      {
        displayName: "integration",
        preset: "jest-puppeteer",
        transform: {
          "\\.tsx?$": "babel-jest",
        },
        modulePathIgnorePatterns: [".next"],
        testMatch: [
          "<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",
        ],
        setupFiles: ['<rootDir>/setup.dev.ts']
      },
    ],
  };
  