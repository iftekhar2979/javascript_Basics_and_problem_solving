let marks=[15,20,15,35,24,18,4,35,135,24,246];
let min=marks[0];
for (var i=0; i<marks.length;i++){
    var element=marks[i];
    if(element<min){
        min=element;

    }
}
console.log("lowest value is : ",min);