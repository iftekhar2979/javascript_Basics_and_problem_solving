const paymentProgress = true;
const mark=80;

function enroll(callback) {
    console.log('Your enroll ment in progress');

    setTimeout(function () {
        if (paymentProgress === true) {
            callback()
        }
    }, 2000)
}

function runingCourse(callback){
    console.log("YOur Course is Runing in Time...");
    setTimeout(function(){
        if(mark>=80){
            callback()
        }else{
            console.log('Sorry we can not provide you the certificare')
        }
    },5000);
}

function getCertificate(){
    console.log('your certificate is Printing')
    setTimeout(function(){
        console.log("congrats")
    },1000)

}
enroll(function(){
    runingCourse(getCertificate);
})