// 1 write a 3 variable

// let firstnumber = 20;
// let myname = 'shakib';
// let friends = ['shakib','ashik',' rakib'];

// 2 changeable varible (let & var )

// let firsrnumber = 10;
// let secoundnumber = 30;
// firsrnumber = past ;
// let totalls = past +secoundnumber;
// console.log(totalls);

//2  not changeable vaiable (const) 
//  const finumber = 10;
//  const senumber = 20;
//  let first = finumber;
//  let secound = senumber;
//  let totall = finumber +senumber;
//  console.log(totalls);

// 3 simple math oparation (+ - * / %)
// (+)
// let  mynumber = 40;
// let mymothern = 50;
// let myfather = 49;
// let allnumber = myfather+ mymothern+ mynumber;
// console.log(allnumber);

// (-)
// let  mynumbers = 40;
// let mymotherns = 50;
// let myfathers = 49;
// let allnumbers = myfathers- mymotherns- mynumbers;
// console.log(allnumbers);

// (*)
// let  mynumberss = 40;
// let mymothernss = 50;
// let myfatherss = 49;
// let allnumberss = myfatherss* mymothernss*mynumberss;
// console.log(allnumberss);

// (/)
// let totalltk = 180;
// let person = 6 ;
// let perpersontk = totalltk / person;
// console.log(perpersontk);

// (%)
// let totalltks = 190;
// let persons = 6 ;
// let perpersontks = totalltks % persons;
// console.log(perpersontks);

// 4 comparison (>,<, == ,!= ,<=, >=,)
// (>)
// var myage = 22; 
// var herage = 25;
// let shakib = myage ;
// let ashik = herage ;
// if(shakib > ashik){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// (<)
// var myage = 22; 
// var herage = 25;
// let shakibs = myage ;
// let ashiks = herage ;
// if(shakibs < ashiks){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// (==)
// var myage = 22; 
// var herage = 25;
// let shakib = myage ;
// let ashik = herage ;
// if(shakib == ashik){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// (!=)
// var myage = 22; 
// var herage = 25;
// let shakib = myage ;
// let ashik = herage ;
// if(shakib != ashik){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// 4 conditional comparison

// let haveAjob = true;
// let haveAcar =false;
// let education = true;
// let haveAproperty= false;
// if(haveAcar && haveAproperty ||education ){
//     console.log('i am interested');
// }
// else{
//     console.log('i am sorry');
// }

// 5 whie loop to display 7 to 19 only odd Number

// find odd number in 6 to 19

/* let i = 6; 
let endNumber = 19;
let currentNumber = i;

while (currentNumber <= endNumber) {
  if (currentNumber % 2 !== 0) {
    console.log(currentNumber); // Print the odd number
  }
  currentNumber++; 
} */

// find even even number in 6 -31 while loop 

/* let i = 6 ;
let endNumber = 31;
while (i <= endNumber){
  i++
  if(i % 2 ==0){
    console.log(i);
  }
} */

// find odd even number in 6 -31 with while loop 

/* let i = 6 ;
let endNumber = 31;
while (i <= endNumber){
  i++
  if(i % 2 !==0){
    console.log(i);
  }
}
 */

// 6 

//  check number off Element

/* let names = ['shakib','rakib','ashik','mahdi'];
console.log(names.indexOf('rakib')); */

// change 3number Element

/* let names = ['shakib','rakib','ashik','mahdi'];
 names [2] ='kasem';
 console.log(names);
 */

// push and pop Element

/* let friends = ['shakib','rakib','ashik','mahdi'];
friends.push('akib');
console.log(friends); */

// pop  pop pop 
/* 
let friends = ['shakib','rakib','ashik','mahdi'];
friends.pop();
console.log(friends); */

// check the Array Element position 

// let friends = ['shakib','rakib','ashik','mahdi'];
// let positions = friends [2];
// console.log(positions);

// 7 
// use any for loop to display any Elements of an Array 

/* let numbers = [39,65,35,7,435,75,353,23,4,5,236];
for (let i = 0 ;i < numbers.length; i++){
  let number = numbers[i];
  console.log(number);
} */

// you have an Array off Number disply only the number bigger than 80
/* 
 let numbers = [29,75,99,110,230,605,112,56,];
let firsrnumber =[];
for(let i = 0 ; i < numbers.length;i++){
  if(numbers[i]< 80) {
    firsrnumber.push(numbers[i]);
  }
  
}
console.log(firsrnumber); */

// you have an Array off Number disply only the number bigger than 90

// let friendsage = [84,34,5,7,221,755,86,422,12,456,623,45,67];
// let finalage = [];
// for(let i = 0 ; i <friendsage.length; i++){
//   if(friendsage[i] < 90 ){
//     finalage.push(friendsage[i]);
//   }
// }
// console.log(finalage);

// 8 
// write a function that take a three numbers .and return the multiplication of three numbers

function multiply (num1,num2,num3){
  let totall = num1 * num2 * num3 ;
  return totall;
}
let mynumber = 394;
let father = 4495;
let mother= 950;
result = multiply (mynumber,mother,father);
console.log(result);

// 9 

// Declaration an Object and change the any object property 

/* let mobile = {
  name:'shaomi',
  price:1000,
  ram:'50gb',
  geranty:'5years ',
}
mobile.price = 12000;
console.log(mobile);

let mobailepricr = 'price';
mobile [mobailepricr] = 4009049;

mobile ['price']= 959849;
console.log(mobile);
 */
