var numbers=[15,20,31,531,64,15,1,646,];

function additionArraysElement(numbers){
var sum=0;

    for( var i=0; i<numbers.length; i++){
      var element=numbers[i]; 
      sum=sum+element;
        }
        return sum;
        }

const elementsum=additionArraysElement([15,16,2220,231,2,15,20,23,12])
console.log(elementsum)