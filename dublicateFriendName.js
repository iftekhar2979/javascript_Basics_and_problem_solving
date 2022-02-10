var name=[1,2,3,15,21,1,2,16,469,13,12,415,3,12];
var uniqueName=[];

for(var i=0; i<name.length; i++){

    var element = name[i];
    var index = name.indexOf(element);

    if(index === -1){
        uniqueName.push(element);
    }
    
}
console.log(uniqueName);