var hands = [
  {
    name: "secs",
    elapsed: 0,
    unitsInParent: 60
  }, {
    name: "mins",
    elapsed: 0,
    unitsInParent: 60
  }, {
    name: "hrs",
    elapsed: 0,
    unitsInParent: 12
  }
];

/*
var secs = 0;
var mins = 0;
var hrs = 0;
var degreesInCircle = 360;
var secsPerMin = 60;
var minsPerHr = 60;
var hrsPerDay = 24;

var secsRotateDeg = 6; // (360deg / 60 rotations)
var minsRotateDeg = 6; // (360deg / 60 rotations)
var hrsRotateDeg = 30; // (360deg / 12 rotations)
*/

function howManyDeg(whichHand) {
  return ((degreesInCircle/hands[whichHand].unitsInParent) * hands[1].elapsed);
}
function handRotate(whichHand) {

}




setInterval(function(){
  hands[0].elapsed++; // ++ work here? idk
  for (var i = 1; i < hands.length; i++) {
    if (hands[i - 1].elapsed % hands[i - 1].unitsInParent === 0) {
      hands[i].elapsed++;
      handRotate();
      //DOM MANIP
    }
  }
  console.log("TICK!");


    /*
    //ADD TO SECONDS COUNTER, MAKE SECONDS HAND MOVE
    hands[0].elapsed++; //not sure if ++ works here

    //IF ANOTHER MINUTE ELAPSES, ADD TO MINUTES COUNTER, MAKE MINUTES HAND MOVE
    if(hands[0].elapsed % secsPerMin === 0) {
      hands[1].elapsed++; //not sure if ++ works here

    }
    //IF ANOTHER HOUR ELAPSES, ADD TO HOUR COUNTER, MAKE HOUR HAND MOVE
    if(hands[1].elapsed % minsPerHr === 0) {
      hands[2].elapsed++; //not sure if ++ works here

    }
    */

    // var secsHand = document.getElementById("second");
    // secsHand.style.transform = "rotate(" + secsRotateDeg + ")";
      document.getElementById("minute").style.transform = "rotate(" + handRotate(mins, );
    }
 }, 50);
