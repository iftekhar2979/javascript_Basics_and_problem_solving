const nums=[1,2,-3,4,-5,6,7,8];
for(let i=0;i<nums.length; i++){
    if(nums[i]>0){
        continue; //conditioner upor vase kore colte  takbe jeta condition er sathe match kore setha takhbe r jeta match korbe na seta ke skip kore jabe.etai  " continue " er use
    }
    console.log(nums[i]);
}