function factorial(n) {

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;


    }
    return factorial;
}

let factnum = factorial(15);
console.log(factnum);