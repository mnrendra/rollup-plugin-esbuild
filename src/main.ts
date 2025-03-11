import esbuild from 'rollup-plugin-esbuild'

import { PLUGIN_NAME, PACKAGE_NAME } from './consts'

import { findPlugin } from './utils'

/**
 * A
 * [rollup-plugin-esbuild](https://www.npmjs.com/package/rollup-plugin-esbuild)
 * with dual exports, allowing consumers to `import` or `require` it without
 * needing to access the `.default` export in both **CommonJS** and
 * **ES Module** formats.
 *
 * @see https://github.com/mnrendra/rollup-plugin-esbuild#readme
 */
const main = findPlugin<typeof esbuild>(esbuild, PLUGIN_NAME, PACKAGE_NAME)

export default main
