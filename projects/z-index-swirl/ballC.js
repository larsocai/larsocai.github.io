//Set global variable that would contain the position, velocity and the html element "ball"
var positionXC = 200;
var positionYC = 300;
var velocityC = 3;
var reverseC = false;
var ballC = document.getElementById("ballC");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 150;
  var Xmax = 200;

  // two y-axis coordinates
  var Ymin = 300;
  var Ymax = 350;

  if (reverseC) {
    positionXC = positionXC + velocityC;
    positionYC = positionYC - velocityC;
    ballC.style.left = positionXC + "px";
    ballC.style.top = positionYC + "px";
  } else {
    positionXC = positionXC - velocityC;
    positionYC = positionYC + velocityC;
    ballC.style.left = positionXC + "px";
    ballC.style.top = positionYC + "px";
  }

  if (
    positionXC > Xmax ||
    positionXC === Xmin ||
    positionYC > Ymax ||
    positionYC === Ymin
  ) {
    reverseC = !reverseC;
  }
}

setInterval(moveBall, 65);
