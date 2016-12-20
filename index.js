var crypto = require('crypto')
var deepmerge = require('deepmerge')

const PAYLOAD_SCHEMA = require('./schema.json')
exports.PAYLOAD_SCHEMA = PAYLOAD_SCHEMA

exports.normalize = function(input) {
  var payload = deepmerge(PAYLOAD_SCHEMA, input)

  // Copy memoryUsage.rss into VmRSS if it does not exist && node.
  if (payload.os.linux.pid.self.status.VmRSS === undefined && payload.nodejs.memoryUsage.rss) {
    payload.os.linux.pid.self.status.VmRSS = Math.ceil(payload.nodejs.memoryUsage.rss / 1024)
  }

  // Inject duration if it does not exist
  if (payload.duration === undefined) {
    payload.duration = Math.ceil(payload.time_sec * 1000000000.0 + payload.time_nanosec)
  }

  // Inject error hash
  if (payload.errors.stack) {
    payload.errors.stackHash = crypto.createHash('sha256').update(payload.errors.stack).digest('hex');
  }

  return payload
}
