// ----------feetToMile--------

/* function feetToMile(feet){

        var mile=feet/5280;
        return mile;

}

    var result=Math.floor(feetToMile(15000));
    console.log(result ,"feet^3");
*/





/* --------woodCalcultor---

const chairSize=24;
const tableSize=80;
const bedSize=60;
const unit="feet^3"

function woodCalculator(chairCount,tableCount,bedCount){
        var  chairCount=chairSize*chairCount;
        var tableCount=tableSize*chairCount;
        var bedCount=bedSize*bedCount;
        var total=chairCount+tableCount+bedCount;
        
        // return chairCount,tableCount,bedCount;
        console.log("chair =",chairCount,unit);
        console.log("table = ",tableCount,unit);
        console.log("bed = ",bedCount,unit)
        console.log("Total Wood = ",total,unit)

}

woodCalculator(2,3,5);
*/





// -------brickCalculator-----


/*
function brickCalculator(floor){

        if(floor<=10){

        var  totalBricks=1000*floor;
        
        }
        else if(floor>10 && floor<=20){

        var totalBricks=1200*floor;
        
        }
        else{

        var totalBricks=1300*floor;

        }
  return totalBricks;      
}
const result=brickCalculator(21);
console.log(result," bricks");
*/






// ----friendsNameArray---
let friends=['babu','ifti','towhid','ovi','murad','rahat'];
for(var i=0;i<friends.length; i++){
        var element=friends[i];
        var condition=friends[i].length;
        if(condition<element){
                console.log(true);
        }
}
