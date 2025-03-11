import { PLUGIN_NAME, PACKAGE_NAME } from '@/consts'

describe('Test all features:', () => {
  describe(`By mocking "${PACKAGE_NAME}" to have a default export:`, () => {
    beforeEach(() => {
      jest.resetModules()
      jest.doMock(PACKAGE_NAME, () => () => ({ name: PLUGIN_NAME }))
    })

    describe('Test on CommonJS:', () => {
      it(`Should have a name property with the value "${PLUGIN_NAME}" when invoked!`, () => {
        /* eslint-disable-next-line @typescript-eslint/no-var-requires */
        const index = require('..')
        const received = index().name
        const expected = PLUGIN_NAME
        expect(received).toBe(expected)
      })
    })

    describe('Test on ES Modules:', () => {
      it(`Should have a name property with the value "${PLUGIN_NAME}" when invoked!`, async () => {
        const index = (await import('..')).default
        const received = index().name
        const expected = PLUGIN_NAME
        expect(received).toBe(expected)
      })
    })
  })

  describe(`By mocking "${PACKAGE_NAME}" to have no default export but have a \`default\` property on \`exports\`:`, () => {
    beforeEach(() => {
      jest.resetModules()
      jest.doMock(PACKAGE_NAME, () => ({
        default: () => ({ name: PLUGIN_NAME })
      }))
    })

    describe('Test on CommonJS:', () => {
      it(`Should have a name property with the value "${PLUGIN_NAME}" when invoked!`, () => {
        /* eslint-disable-next-line @typescript-eslint/no-var-requires */
        const index = require('..')
        const received = index().name
        const expected = PLUGIN_NAME
        expect(received).toBe(expected)
      })
    })

    describe('Test on ES Modules:', () => {
      it(`Should have a name property with the value "${PLUGIN_NAME}" when invoked!`, async () => {
        const index = (await import('..')).default
        const received = index().name
        const expected = PLUGIN_NAME
        expect(received).toBe(expected)
      })
    })
  })

  describe(`By mocking "${PACKAGE_NAME}" to have no default export and no \`default\` property on \`exports\`:`, () => {
    beforeEach(() => {
      jest.resetModules()
      jest.doMock(PACKAGE_NAME, () => ({
        esbuild: () => ({ name: PLUGIN_NAME })
      }))
    })

    describe('Test on CommonJS:', () => {
      it('Should throw an error if no default export or no `default` property exists on `exports` when invoked!', () => {
        /* eslint-disable-next-line @typescript-eslint/no-var-requires */
        const index = require('..')
        const received = (): void => { index() }
        const expected = Error(`Cannot find the default export in this version of "${PACKAGE_NAME}".`)
        expect(received).toThrow(expected)
      })
    })

    describe('Test on ES Modules:', () => {
      it('Should throw an error if no default export or no `default` property exists on `exports` when invoked!', async () => {
        const index = (await import('..')).default
        const received = (): void => { index() }
        const expected = Error(`Cannot find the default export in this version of "${PACKAGE_NAME}".`)
        expect(received).toThrow(expected)
      })
    })
  })
})
