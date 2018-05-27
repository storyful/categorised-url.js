const config = {
  /*
  testMatch [array]
  default: [ '** /__tests__/** /*.js?(x)', '** /?(*.)+(spec|test).js?(x)' ]

  The glob patterns Jest uses to detect test files. By default it looks for .js and .jsx files inside of __tests__ folders, as well as any files with a suffix of .test or .spec (e.g. Component.test.js or Component.spec.js). It will also find files called test.js or spec.js.
  See the micromatch package for details of the patterns you can specify.
  See also testRegex [string], but note that you cannot specify both options.
  */
  testMatch: [ '**/spec/**/*.js' ],


  /*
  verbose [boolean]
  Default: false

  Indicates whether each individual test should be reported during the run.
  All errors will also still be shown on the bottom after execution.
  */
  verbose: true,


  /*
  bail [boolean]
  Default: false

  By default, Jest runs all tests and produces all errors into the console
  upon completion. The bail config option can be used here to have Jest
  stop running tests after the first failure.
  */
  bail: false,

  /*
  collectCoverage [boolean]
  Default: false

  Indicates whether the coverage information should be collected while
  executing the test. Because this retrofits all executed files with coverage
  collection statements, it may significantly slow down your tests.
  */
  collectCoverage: false,

  /*
  coverageDirectory [string]
  Default: undefined

  The directory where Jest should output its coverage files.
  */
  coverageDirectory: './coverage',

  /*
  coverageReporters [array]
  Default: ['json', 'lcov', 'text']

  A list of reporter names that Jest uses when writing coverage reports. Any istanbul reporter can be used.
  Note: Setting this option overwrites the default values. Add "text" or "text-summary" to see a coverage summary in the console output.
  */
  coverageReporters: ['json', 'lcov', 'text', 'html'],
};

module.exports = config;