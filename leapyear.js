function isLeapYear(year){
let formula=year%4;
let formula2=year%100;
let formula3=year%400;

 if (formula==0 && formula2==0 && formula3==0){
     return true;

 }else{
    return false;
 }
}

const leapyear=isLeapYear(2016);
console.log(leapyear);
