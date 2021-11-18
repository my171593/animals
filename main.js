function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifer=ml5.soundClassifer("https://teachablemachine.withgoogle.com/models/wB7MsCx_7/model.json",modelReady);

}
function modelReady(){
    classifer.classify(gotResults);
}
function gotResults(error, results){
if(error){
 console.error(error); 
}
else{
    console.log(results);
}
}
