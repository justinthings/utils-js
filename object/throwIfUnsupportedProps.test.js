import { throwIfUnsupportedProps } from './shared'

describe('throwIfUnsupportedProps', () => {
  it('should NOT throw an error if props are supported', () => {
    const allowed = { hey: 'yo' }
    const toCheck = { hey: 'what' }
    throwIfUnsupportedProps(allowed, toCheck)
  })

  it('should throw an error if props are not supported', () => {
    const allowed = { hey: 'yo' }
    const toCheck = { badProp: 'what' }

    try {
      throwIfUnsupportedProps(toCheck, allowed)
    } catch (e) {
      expect(e).toBeTruthy()
      expect(e.message).toBeTruthy()
      const expectedErrorPart = `The following props are not allowed: badProp`
      expect(e.message.indexOf(expectedErrorPart)).toBeGreaterThan(-1)
      return
    }
    expect('Test did not throw an error').toBe('but it should have thrown an error')
  })
})
