// 1 convartation inch to feet
/* 
function fittoinch (feet){
    let inches = feet * 12 ;
    return inches;
}
getinches = fittoinch(10);
console.log(getinches ,'my inches'); */

// 2  convartation centimeter to meter
//  note : 1 meter =100 centimeter

// function centimetertometer (centimeter){
//     let meter = centimeter / 100 ;
//     return meter;
// }
// getmymeter = centimetertometer(30);
// console.log(getmymeter);

// 3 calculation page requarment

// let firsbookpages = 100;
// let secbookpages = 200;
// let thirdbookpages = 300;

// function countPages (type,quantity){
//    if(type==='first'){
//     let page = quantity *firsbookpages;
//     return page;
//    }
//    else if(type=='second'){
//     let page = quantity *secbookpages;

//     return page;
//    }
//    else if(type === 'third'){
//     let page = quantity *thirdbookpages;
//     return page;
//    }
//    else {
//     return 'invalid peramiter';
//    }
// }
// console.log(countPages ('first',10))

// function SpCountPages (type,quantity){
//      let page = ((type==="first")?(quantity*firsbookpages):((type==="second")?(quantity*secbookpages):(quantity*thirdbookpages)));
//      return page;
// }

//  console.log(SpCountPages("third",10))

// let friendsname = [
//   "ashilchura",
//   "shakibdfsdfsdfsd",
//   "mariyarjamai",
//   "mariyarlansdfsdfsdfsg",
// ];

// function largestname(friends) {
//   let big = "";
//   for (let i = 0; i < friends.length; i++) {
//     let kawya = friends[i];
//     if (kawya.length > big.length) {
//       big = friends[i];
//     }
//   }
//   return big;
// }
// console.log(largestname(friendsname));

/* let friendsname = [
  "ashilchuratttttttttttttttttttttttttttt",
  "shakibdfsdfsdfsd",
  "mariyarjamai",
  "mariyarlansdfsdfsdfsg",
];

function biggestone(name) {
  let big = "";
  for (let i = 0; i < name.length; i++) {
    let element = name[i];
    if (element.length > big.length) {
      big = element;
    }
  }
  return big;
}
console.log(biggestone(friendsname)); */

/* let firsbookpages = 100;

function quantity(first) {
  firsbookpages * first;
  let page = firsbookpages * first;
  return page;
}
result = quantity(10,);
console.log(result);
 */

// var number = [70, 80, 90, 100, 35, 67, 43, 82, 105];
// for (var i = 0; i < number.length; i++) {
//   var allnumber = number[i];
//   if (allnumber < 100) {
//     continue;
//   }
//   console.log(allnumber);
// }

/* var number = [50, 40, 44, 63, 35, 75, 35, 64, 46];
for (var i = 0; i < number.length; i++) {
  var allnumber = number[i];
  if (allnumber > 60) {
    break;
  }
  console.log(allnumber);
} */

// find positive number in Array

let number = [10, 20, 30, -20, 50, -40, 33];
let pos = 0;
for (let i = 0; i < number.length; i++) {
  if (number[i] < 0) {
    pos++;
  } else {
    undefined;
  }
}
console.log(pos);
