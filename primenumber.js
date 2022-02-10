function primeNumbers(num){

for (let i = 2; i <num; i++) {
   
 
    if (num%i == 0 ) {
        
        return false;

    } 
        return true;
}

let p=primeNumbers(45);
console.log(p);