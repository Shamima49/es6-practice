class Child{
    constructor(name){
        this.name = name;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);



class Parent {
    constructor(){
        this.fatherName = "shabuddin";
    }
}
class Children extends Parent{
    constructor(nam){
        super();
        this.nam = nam;
    }
}

const bacca1 = new Children("koli");
const bacca2 = new Children("tom");
console.log(bacca1);
console.log(bacca2);
