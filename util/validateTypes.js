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
      if (typeof(oldObject) != 'string') {
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
  for (var prop in oldObject) {
    // if property exists in the schema, clone the property
    if (schema && schema[prop]) {
      clonedObject[prop] = validateTypes(oldObject[prop], prop, schema[prop])
    }
  }

  return clonedObject
}
