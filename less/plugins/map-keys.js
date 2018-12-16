/* eslint-env node */

const {
	minVersion,
	defineKeysFunction,
} = require('less-plugin-keys')

module.exports = {
	install(less, manager, functions) {
		functions.add('map-keys', defineKeysFunction(less))
	},
	minVersion,
}
