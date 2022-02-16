const paymentProgress = true;
const mark = 80;

function enroll() {
    console.log("Course enroll ment in progess..Enroll now");
    const promise = new promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentProgress) {
                resolve()
            } else {
                reject("enrollment is failed")
            }
        },2000);
    })
    return promise;
}

function progess(){
    console.log("Course is already runing ...")

    const promise=new promise(function(resolve,reject){
        setTimeout(function(){
            if(mark>=80){
                resolve();
            }else{
                reject("Sorry.we can't provide you certificate")
            }
        },3000);
      
    })
    return promise;
}

function getCertificate(){
    console.log('Wait for printing |Certificate')

    const  promise=new promise(function(resolve){
        setTimeout(function (){
            resolve("congratulation")
        })
        return promise;
    })
}

enroll()
    then(progess);
    then(getCertificate);
    then(function(value){
            console.log(value);
        })
    .catch(function(err) {
            console.log(err);
        })