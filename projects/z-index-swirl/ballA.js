var positionXA = 100;
var positionYA = 200;
var velocityA = 3;
var reverseA = false;
var ballA = document.getElementById("ballA");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 100;
  var Xmax = 150;

  // two y-axis coordinates
  var Ymin = 200;
  var Ymax = 250;

  if (reverseA) {
    positionXA = positionXA - velocityA;
    positionYA = positionYA + velocityA;
    ballA.style.left = positionXA + "px";
    ballA.style.top = positionYA + "px";
  } else {
    positionXA = positionXA + velocityA;
    positionYA = positionYA - velocityA;
    ballA.style.left = positionXA + "px";
    ballA.style.top = positionYA + "px";
  }

  if (
    positionXA > Xmax ||
    positionXA === Xmin ||
    positionYA > Ymax ||
    positionYA === Ymin
  ) {
    reverseA = !reverseA;
  }
}

setInterval(moveBall, 65);