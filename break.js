const nums=[1,-2,3,4,-5,-6,7,8,9];
for (let i=0;i<nums.length; i++){
    if(nums[i]>4){
        break  //মানে if কনডিশনটি যতক্ষন না পুর্ন হবে ততক্ষণ  চলবে এরপরে লুপ বা ফাংশন টিকে বন্ধ করে  দিবে break এর মাধ্যমে
    }
    console.log(nums[i]);
}
