// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var parent = document.body.parentElement;

  var stepIn = function(node) {
    for (var i = 0; i < node.children.length; i++) {
      if(node.children[i].classList !== undefined){
        if (node.children[i].classList.contains(className)) {
          result.push(node.children[i]);
        }
      }
      if (node.children[i].children.length > 0) {
        stepIn(node.children[i]);
      }
    }
  };
  stepIn(parent);
  return result
};
