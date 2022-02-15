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
        this.salary=this.salary-amount;
        return this.salary;
    }
 }

//  object method call from object 

person.chargeBill(300);
person.chargeBill(1500);
console.log(person.salary);
