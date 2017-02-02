var payload = require('..')

describe('payload', () => {
  it('accepts empty args & return object', () => {
    var p = payload.normalize()
    expect(typeof p).toEqual('object')
  })

  xit('removes unknown keys', () => {
    var p = payload.normalize({
      evilbit: 1
    })
    expect(p.evilbit).toEqual(undefined)
  })

  it('errors on invalid field value types', () => {
    // todo: test this across all or many fields.
    var f = () => {
      payload.normalize({
        environment: 2
      })
    }
    expect(f).toThrowError(TypeError)
  })

  it('fills VmRSS from NodeJS memory', () => {
    var p = payload.normalize({
      nodejs: {
        memoryUsage: {
          rss: 9000
        }
      }
    })
    // memoryUsage.rss is bytes, VmRSS is kilobytes; divide by 1024.
    expect(p.environment.os.linux.pid.self.status.VmRSS).toEqual(9)
  })

  it('calculates duration from time_sec + nanosec', () => {
    var p = payload.normalize({
      time_sec: 1,
      time_nanosec: 1e9
    })
    // calculation is time_sec * 1e9 + time_nanosec
    expect(p.duration).toEqual(2e9)
  })

  it('calculates stackHash', () => {
    var p = payload.normalize({
      errors: {
        stack: "hello world"
      }
    })
    // sha256 of 'hello world'
    expect(p.errors.stackHash).toEqual('b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9')
  })

  it('should dump custom metrics that have invalid names', function() {
    var p = payload.normalize({
      custom_metrics: [{
        name: 'valid-name',
        s: 'cool data here'
      },
      {
        name: undefined, //should be dumped
        s: 'cool data as well but not valid name'
      },
      {
        name: 'valid-key',
        n: 1
      }
    ]})
    expect(p.custom_metrics.length).toEqual(2)
  })

  it('truncates custom metrics that are too long', function() {
    var longString = 'this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length.'
    var p = payload.normalize({
      custom_metrics: [{
        name: 'valid-name',
        s: 'cool data here'
      },
      {
        name: 'key-with-long-value',
        s: longString
      }
    ]})

    expect(p.custom_metrics[0].s.length).toEqual(14)
    expect(longString.length).toEqual(1759) // verify long string is long for our test
    expect(p.custom_metrics[1].s.length).toEqual(1024)
  })
})
