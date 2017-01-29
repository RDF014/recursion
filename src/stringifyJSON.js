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
  // if (obj.constructor === Array) {
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

    //var strinfigyObj ={}
    //iterate thru Object
    //put key: value ==> variable to stringifyJSON
      //item = stringifyJSON(key) + ':' + stringifyJSON(value);
    //add it into our stringifgyObj
    //return '{' + stringifyObj + '}';
    // '{' + stringifyJSON(stringifyObj) + '}'
    // "{[object Object]}"
  if(typeof obj === 'object') {
  // if(obj.constructor === Object){
     var keyArray = Object.keys(obj);
     var lastIndex = keyArray.length - 1;
     var partialObj = '';

    for(var key in obj){
      if(key === ('functions' || 'undefined') ){
        return '{}';
      }
      if(keyArray.length === 1 || keyArray[lastIndex] === key){
        partialObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      } else {
        partialObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      };
    }
    return '{' + partialObj + '}';
  }
  return '' + obj + '';
};

// console.log(stringifyJSON({}) );                  // '{}'                 Object
// console.log(stringifyJSON([8,5,6]) );                // 'true'               Boolean


// console.log(stringifyJSON([1, 'false', false]) ); // '[1,"false",false]'  Array
// console.log({x: 5}.constructor);
console.log(stringifyJSON({'foo': true, 'bar': false, 'baz': null}) );            // '{"x":5}'            Object
// console.log(JSON.stringify(9000));
// console.log(JSON.stringify('foo'));
