var crypto = require('crypto')
var deepmerge = require('deepmerge')

const PAYLOAD_SCHEMA = require('./schema.json')
exports.PAYLOAD_SCHEMA = PAYLOAD_SCHEMA

exports.normalize = function(input) {
  var payload = deepmerge(PAYLOAD_SCHEMA, input || {})

  // Copy memoryUsage.rss into VmRSS if it does not exist && node.
  if (payload.environment.os.linux.pid.self.status.VmRSS === undefined && payload.nodejs.memoryUsage.rss) {
    payload.environment.os.linux.pid.self.status.VmRSS = Math.ceil(payload.nodejs.memoryUsage.rss / 1024)
  }

  // Inject duration if it does not exist
  if (payload.duration === undefined) {
    payload.duration = Math.ceil(payload.time_sec * 1000000000.0 + payload.time_nanosec)
  }

  // Inject error hash
  if (payload.errors.stack) {
    payload.errors.stackHash = crypto.createHash('sha256').update(payload.errors.stack).digest('hex');
  }

  // Reject custom metrics with invalid keys, or large data
  payload.custom_metrics = payload.custom_metrics.filter(function removeInvalidMetrics(metric) {
    // metric names must be strings
    return (typeof(metric.name) === 'string')
  }).map(function trimLongValues(metric) {
    if (metric.s && typeof(metric.s) === 'string') {
      metric.s = metric.s.substring(0, 1024)
    }
    return metric
  })

  return payload
}
