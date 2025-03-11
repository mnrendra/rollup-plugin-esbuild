import validatePlugin from './validatePlugin'

const findPlugin = <T>(
  pkg: unknown,
  pluginName: string,
  packageName: string
): T => {
  if (validatePlugin(pkg, pluginName)) {
    return pkg as T
  }

  if (
    typeof pkg === 'object' &&
    pkg !== null &&
    'default' in pkg &&
    validatePlugin(pkg.default, pluginName)
  ) {
    return pkg.default as T
  }

  return ((...args: any) => {
    throw new Error(`Cannot find the default export in this version of "${packageName}".`)
  }) as T
}

export default findPlugin
