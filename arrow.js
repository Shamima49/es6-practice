//  function doubleIt(num){
//      return num * 2;
//  }
//  const result = doubleIt(5);
//  console.log(result);



 const drum = function(no){
     return no *3;
 }
 const dam = drum(3);
 console.log(dam);



//  const apple = function appleId(price){
//      return price * 8;
//  }
//  const applePhone = apple(800);
//  console.log(applePhone);


 // shortcut it es6[arrow function]

// [name,parameter,return]
 const doubleIt = num => num * 2;
 const result = doubleIt(40);
 console.log(result);


const red = (x, y) => x + y;

const reding = red(30,20);
console.log(reding);  

const green = () => 5;

const greencolor = green();
console.log(greencolor);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const show = doMath(10, 5);
console.log(show);
