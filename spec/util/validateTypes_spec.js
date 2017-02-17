var validateTypes = require('../../util/validateTypes.js')

describe('type validation', function() {
  it('throws when given an invalid type', function() {
    var f = function() {
      validateTypes('potato', 'some_field', 'r')
    }
    expect(f).toThrowError(TypeError)
  })
})

describe('number validaton', function() {
  it('returns numbers when numbers', function() {
    expect(validateTypes(2, 'some_field', 'n')).toBe(2)
  })

  it('casts numbers if possible', function() {
    expect(validateTypes('22.5', 'some_field', 'n')).toBe(22.5)
  })

  it('throws when a number is not a number', function() {
    var f = function() {
      validateTypes('not a number', 'some_field', 'n')
    }
    expect(f).toThrowError(TypeError)
  })
})

describe('integer validation', function() {
  it('returns integers when integers', function() {
    expect(validateTypes(2, 'some_field', 'i')).toBe(2)
  })

  it('truncates numbers to integers', function() {
    expect(validateTypes(5.5, 'some_field', 'i')).toBe(5)
  })

  it('casts numbers if possible', function() {
    expect(validateTypes('22', 'some_field', 'i')).toBe(22)
    expect(validateTypes('42.52', 'some_field', 'i')).toBe(42)
  })
})

describe('string validation', function() {
  it('returns strings when strings', function() {
    expect(validateTypes('this is a string', 'some_field', 's')).toBe('this is a string')
  })

  it('casts as strings', function() {
    expect(validateTypes(22, 'some_field', 's')).toBe('22')
  })

  it('does not cast undefined or null', function() {
    expect(validateTypes(undefined, 'some_field', 's')).toBe(undefined)
    expect(validateTypes(null, 'some_field', 's')).toBe(null)
  })
})

describe('boolean validation', function() {
  it('returns booleans', function() {
    expect(validateTypes(false, 'some_field', 'b')).toEqual(false)
    expect(validateTypes(true, 'some_field', 'b')).toEqual(true)
  })

  it('throws if not a boolean', function() {
    var f = function() {
      validateTypes('false', 'some_field', 'b')
    }
    expect(f).toThrowError(TypeError)
  })
})

describe('array validaton', function() {
  it('validates arrays with one type record', function() {
    expect(validateTypes([2,3.5,'4'], 'some_field', 'i')).toEqual([2,3,4])
  })
})
