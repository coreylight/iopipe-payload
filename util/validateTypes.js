module.exports = function validateTypes(oldObject, prop, schema) {
  if (!(oldObject instanceof Object)) {
    switch (schema) {
    case 'n':
      if (typeof(oldObject) != 'number') {
        if (!isNaN(Number(oldObject))) {
          return Number(oldObject)
        }
        throw new TypeError(`${oldObject} is not a number for ${prop}`)
      }
      else { return oldObject }
      break
    case 'i':
      if (typeof(oldObject) != 'number') {
        if (!isNaN(Number(oldObject))) {
          return Number(oldObject)
        }
        throw new TypeError(`${oldObject} is not a number for ${prop}`)
      }
      else { return oldObject }
      break
    case 's':
      // Check if it's not a string; if undefined, it will be dropped or handled
      // in custom_metrics
      if (typeof(oldObject) != 'string' && oldObject != undefined) {
        return String(oldObject)
      } else {
        return oldObject
      }
      break
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
