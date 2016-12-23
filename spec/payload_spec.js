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
})
