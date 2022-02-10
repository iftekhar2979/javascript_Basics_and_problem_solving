function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n*factorial(n-1);

    }
}

var fact=factorial(10);
console.log(fact);