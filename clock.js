var secs = 0;
var mins = 0;
var hrs = 0;
var degreesInCircle = 360;
var secsPerMin = 60;


var secsRotateDeg = 6; // (360deg / 60 rotations)
var minsRotateDeg = 6; // (360deg / 60 rotations)
var hrsRotateDeg = 30; // (360deg / 12 rotations)


function secsHandRotate(secs) {
  return ((degreesInCircle/secsPerMin) * secs);
}




setInterval(function(){
    console.log("TICK!");
    // var secsHand = document.getElementById("second");
    // secsHand.style.transform = "rotate(" + secsRotateDeg + ")";
    if(secs < 60) {
      secs++;
    } else {
      secs = 0;
    }
    secsHandRotate(secs);
 }, 1000);
