function factorial(n){
    
    let factorial=1;
    let i=1;

while (i <= n) {
    factorial=factorial*i           //while  loop will do increase the n one by one while n statement is right then the  loop wil be stop
    i++;                            // value of i will increase 1 by 1 
    
  }
  return factorial;
}

const whileFactorial=factorial(10);
console.log(whileFactorial); 