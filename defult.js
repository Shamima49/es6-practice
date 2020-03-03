function add(num1, num2){
    return num1 + num2;
}
const total = add(15,17);
 console.log(total);



 function run(number1, number2){
   if(number2 == undefined){
       number2 = 0
   }
   return number1 + number2;
}
const plus = run(90);
console.log(plus);



function dot(plus1,plus2){
    plus2 = plus2 || 20;
    return plus1 + plus2;
}
const added = dot(50);
console.log(added);



function lazy(min1,min2 = 40){
    return min1 + min2;
}
const got = lazy(20)
console.log(got);



function cat(no1 , no2 = 50){
    return no1 + no2;
}
const dog = cat(60, 80);
console.log(dog);