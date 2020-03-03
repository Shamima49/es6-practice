const hubby = "Elias Kanchon";
console.log(hubby);
// const can't change value like var
// hubby = "omor sani";

const numbers = [12, 45];
numbers[1] = 88;   // const can add & update element
numbers.push(33);
//numbers = ["sunny", "salman", "omit"];
// can't change hole element

const nayok = {name:"sakib khan", phone:333344};

//console.log(nayok);
let patientName = "Rahim chacha";
patientName = "Fatema Khala"; //let can change value
console.log(patientName);

    let sum = 0

    //  for(var i = 0; i <10; i++){
    //  sum = sum + i;
    //  }
    //  console.log(i);
    //  for(var) can show output/return {} bracket

for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i);   // let can show error outside {} bracket