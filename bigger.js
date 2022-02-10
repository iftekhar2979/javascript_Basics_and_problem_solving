// var buisness=230;
// var minister=440;
// var sochib=330;
function bigger(buisness,minister,sochib){

if(buisness>minister>sochib){
    console.log("buisness is biggest. and minister is bigger than sochib");
}else if(minister>buisness>sochib){
    console.log("Minister is biggest. and buisness is bigger than sochib");
}else if( sochib>buisness>minister){
    console.log("Sochib is biggest. and buisness is bigger than minister");
}else if(sochib>minister>buisness){
    console.log("sochib is biggest. and minister is bigger than sochib");
}else if(minister>sochib>buisness){
    console.log("minister is biggest. and sochib is bigger than buisness");
}else{
    console.log("minister is biggest. and sochib is bigger than buisness");

}
}          

const big=bigger(45,20,13);
console.log(big);
