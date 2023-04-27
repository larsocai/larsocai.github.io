//Set global variable that would contain the position, velocity and the html element "ball"
var positionXD = 100;
var positionYD = 300;
var velocityD = 3;
var reverseD = false;
var ballD = document.getElementById("ballD");

//write a function that can change the position of the html element "ball"
function moveBall() {
  var Xmin = 50;
  var Xmax = 100;
  var Ymin = 250;
  var Ymax = 300;

  if (reverseD) {
    positionXD = positionXD + velocityD;
    positionYD = positionYD + velocityD;
    ballD.style.left = positionXD + "px";
    ballD.style.top = positionYD + "px";
  } else {
    positionXD = positionXD - velocityD;
    positionYD = positionYD - velocityD;
    ballD.style.left = positionXD + "px";
    ballD.style.top = positionYD + "px";
  }

  if (
    positionXD >= Xmax ||
    positionXD <= Xmin ||
    positionYD >= Ymax ||
    positionYD <= Ymin
  ) {
    reverseD = !reverseD;
  }
}

setInterval(moveBall, 65);
