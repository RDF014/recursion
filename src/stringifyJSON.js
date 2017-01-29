// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj) === true) {
    if (obj.length > 0) {
      var stringifyArr = [];
      for (var i = 0; i < obj.length; i++) {
        stringifyArr.push( stringifyJSON(obj[i]) );
      }
      return '[' + stringifyArr + ']';
    } else {
      return '[]';
    }
  }

  if (typeof obj === 'object') {
    var stringifyObj = '';
    var keys = Object.keys(obj);
    var lastIndex = keys.length - 1;

    for (var key in obj) {
      if (key === 'function' || key === 'undefined') {
        return '{}';
      }
      if (keys.length === 1 || keys[lastIndex] === key) {
        stringifyObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      } else {
        stringifyObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + stringifyObj + '}';
  }

  return '' + obj + '';
};
