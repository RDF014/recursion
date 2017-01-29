// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //have to use jquery
  // var $body = $('document')
  var body = document.body;  //html code
  // var childs = body.childNodes;  //node array of child element
  var childs = body.children;
  // console.log(childs);
  // console.log(body.classList)
  // console.log(body.children);
  var result = [];

  for (var i = 0; i < body.parentElement.childNodes.length; i++) {
    if(body.parentElement.childNodes[i].classList){
      if(body.parentElement.childNodes[i].classList.value === className){
        result.push(body.parentElement.childNodes[i]);
      }
      // console.log(body.parentElement.childNodes[i].classList)
    }

  }
  // console.log(body.parentElement.childNodes);

  for(var i = 0; i < childs.length; i++){
    // if(childs[i].classList !== undefined){
      if(childs[i].classList.value === className){
        result.push(getElementsByClassName(childs[i]));
      }
    // }
    // console.log(childs[i].classList)

  }
  console.log(result);
  return result;
  // console.log(childs[3].classList.value)    //targetClassName


  // onsole.log( body )
    // ['className1', ...]

  // console.log(body.parentElement.childNodes);
    // <body class="targetClassName">
    //  <div class="targetClassName"></div>
    // </body

 // [body.targetClassName, div.targetClassName]
};

// var examp = document.getElementsByClassName('targetClassName')
// console.log( examp)

//theres 2 cases
// 1) look thru the entire document
// get documment.body
// call node.childNodes    //collection of all child nodes
// convert
// for each of the child nodes,   //use recursion or a while loop
// use element.classList to see all the classes
//   if classList has our targetClassName,
//   then push to a result array
//

// [otherClassName, targetClassName]

// <div class="targetClassName"></div>
// <div class="otherClassName targetClassName</div>
// <div>
//   <div class="targetClassName"></div>.
// </div>
// <div>
//   <div class="targetClassName">
//     <div class="targetClassName">
//     </div>
//   </div>
// </div>

// <div>
//   <div>
//   </div>
//   <div>
//     <div class="targetClassName">
//     </div>
//   </div>
// </div>,
// <div>
//   <div class="targetClassName">
//   </div>
//   <div class="targetClassName">
//   </div>
// </div>,
// <div>
//   <div class="somediv">
//     <div class="innerdiv">
//       <span class="targetClassName">yay</span>
//     </div>
//   </div>
// </div>
