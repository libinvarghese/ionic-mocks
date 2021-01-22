var path = require('path');

module.exports = function (config) {
	var cfg = {
		basePath: '',
		frameworks: ['jasmine', 'karma-typescript'],
		reporters: ['progress', 'coverage', 'karma-typescript'],
		files: ['src/**/*.ts'],
		browsers: ['Chrome'],
		singleRun: true,
		colors: true,
		preprocessors: {
			'src/**/*.ts': ['karma-typescript'],
			'src/**/*!(.spec).ts': ['coverage']
		},
		karmaTypescriptConfig: {
			compilerOptions: {
				rootDir: 'src',
				lib: ["es2016", "dom"]
			},
			exclude: [
				"node_modules",
				"dist",
				"scripts"
			]
		},
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage'
		}
	};
	if (process.env.TRAVIS) {
		cfg.browsers = ['Chrome_travis_ci'];
	}

	config.set(cfg);
};
