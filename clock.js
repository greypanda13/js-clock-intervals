var currentDate = Date.now();
var hands = [
  {
    name: "second",
    elapsed: (Math.floor((currentDate/1000))),
    clockPositions: 60,
    secondsInUnit: 1
  }, {
    name: "minute",
    elapsed: 0,
    clockPositions: 60,
    secondsInUnit: 60
  }, {
    name: "hour",
    elapsed: 0,
    clockPositions: 12,
    secondsInUnit: (12 * 60)
  }
];
var degreesInCircle = 360;

function howManyDeg(whichHand) {
  return ((degreesInCircle/hands[whichHand].clockPositions) * hands[whichHand].elapsed);
}
function handRotate(whichHand) {
  var handToRotate = document.getElementById(hands[whichHand].name);
  console.log(hands[whichHand].name);
  handToRotate.style.transform = "rotate(" + howManyDeg(whichHand) + "deg)";
}

setInterval(function(){
  hands[0].elapsed++;
  console.log(hands[0].elapsed);
  handRotate(0);

  for (var i = 1; i < hands.length; i++) {
    hands[i].elapsed = Math.floor(hands[0].elapsed / hands[i].secondsInUnit);
    handRotate(i);
  }
}, 1000);
