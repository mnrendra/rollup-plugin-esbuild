import { PLUGIN_NAME, PACKAGE_NAME } from '@/consts'

import index from '..'

jest.mock('rollup-plugin-esbuild', () => () => ({ name: PLUGIN_NAME }))

describe(`By mocking "${PACKAGE_NAME}" to have a default export:`, () => {
  it(`Should have a name property with the value "${PLUGIN_NAME}" when invoked!`, () => {
    const received = index().name
    const expected = PLUGIN_NAME
    expect(received).toBe(expected)
  })
})
