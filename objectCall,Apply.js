const person={
    firstName:'Iftekhar',
    LastName:"salmin",
    salary:15000,

    // Object method declare
    getfullName :function(){
        console.log(this.firstName,this.LastName);
    },
    // second object method declare

    chargeBill:function(amount,tax,homerent){
      console.log(this)
        this.salary=this.salary-amount-homerent-tax;
        return this.salary;
    }
}


const heroAlam={
    firstName:'Hero',
    lastName:'Alam',
    salary:30000 
}
person.chargeBill.call(heroAlam,1500,300,5000);
person.chargeBill.call(heroAlam,1500,300,5000);

const zeroAlam={
    firstName:'Zero',
    lastName:'Alam',
    salary:50000
}
person.chargeBill.apply(zeroAlam,[1200,300,15000]);
person.chargeBill.apply(zeroAlam,[1200,300,15000]);
console.log(zeroAlam.salary);
