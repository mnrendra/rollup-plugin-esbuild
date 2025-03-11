import { PLUGIN_NAME, PACKAGE_NAME } from '@/consts'

import index from '..'

jest.mock('rollup-plugin-esbuild', () => ({
  esbuild: () => ({ name: PLUGIN_NAME })
}))

describe(`By mocking "${PACKAGE_NAME}" to have no default export and no \`default\` property on \`exports\`:`, () => {
  it('Should throw an error if no default export or no `default` property exists on `exports` when invoked!', () => {
    const received = (): void => {
      index()
    }

    const expected = Error(`Cannot find the default export in this version of "${PACKAGE_NAME}".`)

    expect(received).toThrow(expected)
  })
})
