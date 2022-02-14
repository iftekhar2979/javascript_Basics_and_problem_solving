const person={
    firstName:'Iftekhar',
    LastName:"salmin",
    salary:15000,

    // Object method declare
    getfullName :function(){
        console.log(this.firstName,this.LastName);
    },
    // second object method declare

    chargeBill:function(amount){
      console.log(this)
        this.salary=this.salary-amount;
        return this.salary;
    }
}

// binding an object method to new objects ".bind()"
// first example

const heroAlam={
    firstName:'Hero',
    lastName:'Alam',
    salary:30000 
}
const heroChargeBill=person.chargeBill.bind(heroAlam);
heroChargeBill(2000);
heroChargeBill(1000);

// second example

 const seraAlam={
    firstName:'Sera',
    lastName:'Alam',
    salary:3000 
}

const seraChargeBill=person.chargeBill.bind(seraAlam);
seraChargeBill(200);
console.log(seraAlam);

// third example

const deraAlam={
    firstName:'Dera',
    lastName:'Alam',
    salary:4000
}
const deraChargeBill=person.chargeBill.bind(deraAlam);
 
 deraChargeBill(500);
 console.log(deraAlam);

