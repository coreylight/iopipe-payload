var crypto = require('crypto')
var validateTypes = require('./util/validateTypes.js')

const PAYLOAD_SCHEMA = require('./schema.json')
exports.PAYLOAD_SCHEMA = PAYLOAD_SCHEMA

exports.normalize = function(input) {
  var payload = validateTypes(input || {}, null, PAYLOAD_SCHEMA)
  var fields = Object.keys(payload)

  // 0.2.1 of node will send container_id, old versions send vm_id
  if (input && input.environment && input.environment.host && input.environment.host.vm_id) {
    payload.environment.host.container_id = input.environment.host.vm_id
  }

  // Inject error hash
  if ((fields.indexOf('errors') > -1) && payload.errors.stack) {
    payload.errors.stackHash = crypto.createHash('sha256').update(payload.errors.stack).digest('hex');
  }

  // Reject custom metrics with invalid keys, or large data
  payload.custom_metrics = fields.indexOf('custom_metrics') > -1 && payload.custom_metrics.filter(function removeInvalidMetrics(metric) {
    // metric names must be strings
    return (typeof(metric.name) === 'string')
  }).map(function trimLongValues(metric) {
    if (metric.s && typeof(metric.s) === 'string' && metric.s.length > 1024) {
      metric.s = `Metric of length ${metric.s.length} is longer than allowed length of 1024. See https://support.iopipe.com/hc/en-us/articles/115002091867-How-do-I-use-custom-metrics-and-logs for details`
    }
    return metric
  })

  return payload
}
