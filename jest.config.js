module.exports = {
    transform: {
      "^.+\\.jsx?$": "./jest-preprocess.js",
    },
    testPathIgnorePatterns: [`node_modules`, `.cache`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    verbose: true,
    testURL: "http://localhost/",
    testMatch: [
      "**/?(*.)+(spec|test).js?(x)"
    ],
    setupFiles: [
      "./loadershim.js"
    ],
    snapshotSerializers: [
      "enzyme-to-json/serializer"
    ],
    moduleNameMapper: {
      "^styled-components": '<rootDir>/node_modules/styled-components',
    },
    coverageDirectory: "./test/coverage/",
    coveragePathIgnorePatterns: [
      "./node_modules/",
      "./test/",
      "./static/",
      "./.jest/"
    ]
}
