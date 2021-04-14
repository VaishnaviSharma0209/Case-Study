Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
})
camera=document.getElementById("camera");
Webcam.attach('#camera');
function capture_image(){
Webcam.snap(function(data_uri) {
    document.getElementById("result_tm").innerHTML='<img id="image_tm" src="'+ data_uri +'"/>';
    document.getElementById("result_mn").innerHTML='<img id="image_mn" src="'+ data_uri +'"/>';
});
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('MobileNet',model_loaded);
function model_loaded(){
    console.log("MobileNet Loaded");
}
function check_image_mn(){
    img=document.getElementById("image_mn");
    classifier.classify(img,result);
}
function result(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("name_mn").innerHTML=result[0].label;
    }
}
classifier_tm=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kgMVdqjnM/model.json',modelLoaded_1);
function modelLoaded_1(){
    console.log("Model Loaded");
}
function check_image_tm(){
    img=document.getElementById("image_tm");
    classifier_tm.classify(img,getresult);
}
function getresult(error,gotresults){
    if(error){
        console.log(error);
    }
    else{
        console.log(gotresults);
        document.getElementById("name_tm").innerHTML=gotresults[0].label;
    }
}
function speak(){
    syth=window.speechSynthesis;
    var speak_data="The teachable machine is not a pre trained model so I have only made Book, Chair, Mic, Mask, IronBox, Tissue Roll and Phone Case.";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    syth.speak(utterThis);
}
