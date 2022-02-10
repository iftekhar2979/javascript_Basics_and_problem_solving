let marks=[41,51,46,13,45,87,98,5,134,45,65];
let max=marks[0];

for (var i=0; i<marks.length; i++){
    var element=marks[i];
    if(element>max){
        max=element;
    }
}

console.log("Higest value is : " , max);