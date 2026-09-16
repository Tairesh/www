// Flat config with no imports on purpose: eslint runs through npx, so anything
// this file `import`s would have to resolve from a node_modules the repo does
// not have. The rules are therefore listed rather than extended from a preset.
//
// .mjs because there is no package.json to declare the module type.

export default [
	{
		files: ["public/**/*.js"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "script",
			globals: {
				document: "readonly",
				window: "readonly",
				location: "readonly",
				console: "readonly",
			},
		},
		rules: {
			// Correctness.
			"no-undef": "error",
			"no-unused-vars": "error",
			"no-redeclare": "error",
			"no-dupe-keys": "error",
			"no-dupe-args": "error",
			"no-duplicate-case": "error",
			"no-unreachable": "error",
			"no-fallthrough": "error",
			"no-cond-assign": "error",
			"no-constant-condition": "error",
			"no-self-assign": "error",
			"no-sparse-arrays": "error",
			"use-isnan": "error",
			"valid-typeof": "error",

			// Things that work until they do not.
			"eqeqeq": "error",
			"no-implicit-globals": "error",
			"no-eval": "error",
			"no-implied-eval": "error",
			"no-var": "error",
		},
	},
];
