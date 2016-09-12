const validBraces = require('../lib/index')

describe('validBraces', () => {
  it('()', () => {
    expect(validBraces('()')).toEqual(true)
  })

  it('[(])', () => {
    expect(validBraces('[(])')).toEqual(false)
  })
})
