const ages = [12, 14, 16, 18, 20];
const ages2 = [14, 20, 18];
const ages3 = [20, 30, 40,];

// old concept to join all arrays
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

// ...(threedot) add all array together
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);


const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);
//this is not defined
// const taka = [450, 450, 250];
// const max = Math.max(taka);
// console.log(max);

const taka = [550, 450, 250];
const max = Math.max(...taka);
 console.log(max);

const takapoysa = [450, 650, 250];
const tk = Math.max