module.exports = {
	'env': {
		'browser': true,
		'es2020': true
	},
	'extends': [
		"prettier",
		"airbnb-base"
	],
	'parserOptions': {
		'ecmaVersion': 11,
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		"prettier/prettier": "error"
	}
}
