function validateNumber(item, prop) {
  if (typeof(item) != 'number') {
    if (!isNaN(Number(item))) {
      return Number(item)
    }
    throw new TypeError(`${item} is not a number for ${prop}`)
  }
  return item
}

function validateInteger(item, prop) {
  if (typeof(item) != 'number') {
    if (!isNaN(Number(item))) {
      return Math.trunc(Number(item))
    }
    throw new TypeError(`${item} is not a number for ${prop}`)
  }
  return Math.trunc(item)
}

function validateString(item) {
  // Check if it's not a string; if undefined, it will be dropped or handled
  // in custom_metrics
  if (typeof(item) != 'string' && item != undefined) {
    return JSON.stringify(item)
  } else {
    return item
  }
}

function validateBoolean(item, prop) {
  if (typeof(item) != 'boolean') {
    throw new TypeError(`${item} is not a boolean for ${prop}`)
  }
  return item
}

module.exports = function validateTypes(oldObject, prop, schema) {
  if (!(oldObject instanceof Object)) {
    switch (schema) {
    case 'n':
      return validateNumber(oldObject, prop)
      break
    case 'i':
      return validateInteger(oldObject, prop)
      break
    case 's':
      return validateString(oldObject)
      break
    case 'b':
      return validateBoolean(oldObject, prop)
    default:
      throw new TypeError(`${oldObject} is not of type ${schema} for ${prop}`)
    }
  }

  var clonedObject

  // Filter out special objects.
  var Constructor = oldObject.constructor
  clonedObject = new Constructor()

  // Clone each property.
  // Deal with arrays differently, because we only get 1 object
  if (Array.isArray(oldObject)) {
    oldObject.forEach(function handleRecord(item, index) {
      clonedObject[index] = validateTypes(item, null, schema[0])
    })
  } else {
    for (var key in oldObject) {
      // if property exists in the schema, clone the property
      if (schema && schema[key]) {
        clonedObject[key] = validateTypes(oldObject[key], key, schema[key])
      }
    }
  }

  return clonedObject
}
