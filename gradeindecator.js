// let aPlus = 80;
// let a = 70

function grade(num) {
    if (num > 80) {
        console.log("A+")

    } else if (num > 70 && num < 80) {
        console.log("A");
    } else if (num > 60 && num < 70) {
        console.log("A-")

    } else if (num > 50 && num < 60) {
        console.log("B")
    } else if (num > 40 && num < 50) {
        console.log("C");

    } else if (num => 33 && num < 40) {
        console.log("D");
    } else{
        console.log("fail");
    }
}
let result=grade(45);
console.log(result);