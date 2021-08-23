// https://teachablemachine.withgoogle.com/models/QHO0ZEX9U/
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

function gotResults(){
 console.log("gotResults!")
}