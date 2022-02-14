
// adding new class and under the constructor

class person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }
}

// add the "new " keyword


const heroParson=new person("Hero","Alam",20000);
console.log(heroParson);
const zeroPerson=new person("Zero"," Alam " ,52000);
console.log(zeroPerson);
const deroPerson=new person("dero "," Alam" ,3000);
console.log(deroPerson);

class oldperson{
     constructor(firstName ,lastName,pension){
this.firstName=firstName;
this.lastName=lastName;
this.pension=pension;

     }
}
const grandPapa=new oldperson("grand","Dada",1500);
console.log(grandPapa);