# @mnrendra/rollup-plugin-esbuild
A [rollup-plugin-esbuild](https://www.npmjs.com/package/rollup-plugin-esbuild) with dual exports, allowing consumers to `import` or `require` it without needing to access the `.default` export in both **CommonJS** and **ES Module** formats.

*This 🍣 [Rollup](https://rollupjs.org/) plugin is only linked to [rollup-plugin-esbuild](https://www.npmjs.com/package/rollup-plugin-esbuild) version [^6.2.1](https://www.npmjs.com/package/rollup-plugin-esbuild/v/6.2.1), so it doesn’t modify any original code except for how it is exported and packaged.*

*Thank you to [@egoist](https://github.com/egoist) for creating [rollup-plugin-esbuild](https://www.npmjs.com/package/rollup-plugin-esbuild).*

## Install
```bash
npm i -D @mnrendra/rollup-plugin-esbuild
```

## Usage
For **ES modules** (`rollup.config.mjs`):
```javascript
import esbuild from '@mnrendra/rollup-plugin-esbuild'

export default {
  // ... any Rollup options
  plugins: esbuild({
    // rollup-plugin-esbuild's options
  })
}
```
For **CommonJS** (`rollup.config.js`):
```javascript
const esbuild = require('@mnrendra/rollup-plugin-esbuild')

module.exports = {
  // ... any Rollup options
  plugins: esbuild({
    // rollup-plugin-esbuild's options
  })
}
```

## Contribute
Contributions are always welcome! Feel free to start a discussion [here](https://github.com/mnrendra/rollup-plugin-esbuild/discussions).<br/>
*Or, if you find any issues with this package, please open an issue [here](https://github.com/mnrendra/rollup-plugin-esbuild/issues).*

## License
[MIT](https://github.com/mnrendra/rollup-plugin-esbuild/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
