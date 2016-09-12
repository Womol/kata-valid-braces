const validBraces = require('../lib/index')
// const validBraces = require('../lib/clever')

describe('validBraces', () => {
  it('()', () => {
    expect(validBraces('()')).toEqual(true)
  })

  it('[(])', () => {
    expect(validBraces('[(])')).toEqual(false)
  })
})
