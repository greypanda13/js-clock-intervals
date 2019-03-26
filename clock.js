var hands = [
  {
    name: "second",
    elapsed: 0,
    unitsInParent: 60
  }, {
    name: "minute",
    elapsed: 0,
    unitsInParent: 60
  }, {
    name: "hour",
    elapsed: 0,
    unitsInParent: 12
  }
];
var degreesInCircle = 360;

function howManyDeg(whichHand) {
  return ((degreesInCircle/hands[whichHand].unitsInParent) * hands[whichHand].elapsed);
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
    if (hands[i - 1].elapsed % hands[i - 1].unitsInParent === 0) {
      hands[i].elapsed++;
      // MANIPULATE THAT DOM BROOOOO
      handRotate(i);
    }
  }
}, 50);
