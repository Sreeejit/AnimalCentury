// https://teachablemachine.withgoogle.com/models/QHO0ZEX9U/
Bow = 0;
Meow = 0;
Background = 0;

function startClassification()
{
    console.log("startClassification")
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QHO0ZEX9U/model.json', modelReady);

}


function modelReady(){
    console.log("modelReady!")
    classifier.classify(gotResults);
}

function gotResults(error,results){
 console.log("gotResults!")
 if(error){
    console.log(error);
 }
 else{
console.log(results);
// r = floor (random(1,255));
// g = floor(random(1,255));
// b = floor(random(1,255));
final_result = results[0].label;
document.getElementById('HearingIsNeeded').innerHTML = "I can hear - " + final_result;

 
 }
}