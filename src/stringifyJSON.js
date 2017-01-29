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

  if (obj.constructor === Array) {
    if (obj.length > 0) {
      var stringifyArr = [];
      for (var i = 0; i < obj.length; i++) {
        stringifyArr.push( stringifyJSON(obj[i]) );
      }
      return '[' + stringifyArr + ']';
    } else if (obj.length === 0){
      return '[]';
    }
  }
  return '' + obj + '';
};

console.log(stringifyJSON({}) );                  // '{}'                 Object
console.log(stringifyJSON([8,5,6]) );                // 'true'               Boolean


console.log(stringifyJSON([1, 'false', false]) ); // '[1,"false",false]'  Array
console.log(stringifyJSON({ x: 5 }) );            // '{"x":5}'            Object

// console.log(JSON.stringify(9000));
// console.log(JSON.stringify('foo'));
