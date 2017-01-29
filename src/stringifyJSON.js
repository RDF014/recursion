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

  if(typeof obj === 'object') {
  // if(obj.constructor === Object){
    if( Object.keys(obj).length > 1 ){
      var k = Object.keys(obj)[0];
      var v = obj[k];

      delete obj[k];
      // console.log(value)

      return '{' + stringifyJSON(k) + ':' + stringifyJSON(v) + ',' + stringifyJSON(obj)  +  '}';
    } else if ( Object.keys(obj).length === 1) {
      var k = Object.keys(obj)[0];
      var v = obj[k];

      delete obj[k];
      // console.log(value)

      return '{' + stringifyJSON(k) + ':' + stringifyJSON(v) +  '}';

    } else {
    // return ... stringigy key : string vale , stringy obj..... }
      return '{}';
    }

//{x:5, y:4}

  'infront'.concat('inback')

    //var strinfigyObj ={}
    //iterate thru Object
    //put key: value ==> variable to stringifyJSON
      //item = stringifyJSON(key) + ':' + stringifyJSON(value);
    //add it into our stringifgyObj
    //return '{' + stringifyObj + '}';
    // '{' + stringifyJSON(stringifyObj) + '}'
    // "{[object Object]}"
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
