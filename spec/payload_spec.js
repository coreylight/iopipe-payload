var payload = require('..')
var sample = require('./sample.js')

describe('payload', () => {
  it('accepts empty args & return object', () => {
    var p = payload.normalize()
    expect(typeof p).toEqual('object')
  })

  it('removes unknown keys', () => {
    var p = payload.normalize({
      evilbit: 1
    })
    expect(p.evilbit).toEqual(undefined)
  })

  it('errors on invalid field value types', () => {
    // Object
    var sampleWithBadEnv = Object.assign({}, sample, {
      environment: 2
    })

    // Array
    var sampleWithBadCPU = Object.assign({}, sample, {
      environment: {
        os: {
          cpus: 'I am not a CPU obj inside an array'
        }
      }
    })

    // Number
    var sampleWithBadMemoryLimit = Object.assign({}, sample, {
      aws: {
        memoryLimitInMB: 'purple elephant'
      }
    })
    // TODO: Int, string?
    var f = () => {
      payload.normalize(sampleWithBadEnv)
    }

    var f2 = () => {
      payload.normalize(sampleWithBadCPU)
    }

    var f3 = () => {
      payload.normalize(sampleWithBadMemoryLimit)
    }
    expect(f).toThrowError(TypeError)
    expect(f2).toThrowError(TypeError)
    expect(f3).toThrowError(TypeError)
  })

  it('calculates stackHash', () => {
    var sampleWithError = Object.assign({}, sample, {
      errors: {
        stack: 'hello world'
      }
    })
    var p = payload.normalize(sampleWithError)
    // sha256 of 'hello world'
    expect(p.errors.stackHash).toEqual('b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9')
  })

  it('should dump custom metrics that have invalid names', function() {
    var sampleWithMetrics = Object.assign({}, sample, {
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
    var p = payload.normalize(sampleWithMetrics)

    expect(p.custom_metrics.length).toEqual(2)
  })

  it('truncates custom metrics that are too long', function() {
    var longString = 'this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length. this string is so long that it is not allowed so we cut it to a shorter length.'
    var sampleWithLongMetrics = Object.assign({}, sample, {
      custom_metrics: [{
        name: 'valid-name',
        s: 'cool data here'
      },
      {
        name: 'key-with-long-value',
        s: longString
      }
    ]})
    var p = payload.normalize(sampleWithLongMetrics)

    expect(p.custom_metrics[0].s.length).toEqual(14)
    expect(longString.length).toEqual(1759) // verify long string is long for our test
    expect(p.custom_metrics[1].s).toEqual('Metric of length 1759 is longer than allowed length of 1024. See https://support.iopipe.com/hc/en-us/articles/115002091867-How-do-I-use-custom-metrics-and-logs for details')
  })

  it('backfills container_id if vm_id is present', function() {
    var p = payload.normalize(sample)

    expect(p.environment.host.container_id).toBe('e79de621-0f15-4638-ab0d-44dc4c74b7a6')
    expect(p.environment.host.vm_id).toBeUndefined()
  })

  it('backfills getRemainingTimeInMillis when not under aws key', function() {
    var p = payload.normalize(sample)

    expect(sample.getRemainingTimeInMillis).toBe(4821)
    expect(p.getRemainingTimeInMillis).toBeUndefined()
    expect(p.aws.getRemainingTimeInMillis).toBe(4821)
  })
})
