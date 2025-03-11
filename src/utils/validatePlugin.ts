const validatePlugin = (
  dunno: unknown,
  pluginName: string
): boolean => {
  if (typeof dunno !== 'function') {
    return false
  }

  const plugin = dunno()

  return typeof plugin === 'object' &&
  plugin !== null &&
  plugin.name === pluginName
}

export default validatePlugin
