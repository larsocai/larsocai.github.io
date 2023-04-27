//Set global variable that would contain the position, velocity and the html element "ball"
var positionXG = 250;
var positionYG = 250;
var velocityG = 3;
var reverseG = false;
var ballG = document.getElementById("ballG");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 200;
  var Xmax = 250;

  // two y-axis coordinates
  var Ymin = 250;
  var Ymax = 300;

  if (reverseG) {
    positionXG = positionXG + velocityG;
    positionYG = positionYG - velocityG;
    ballG.style.left = positionXG + "px";
    ballG.style.top = positionYG + "px";
  } else {
    positionXG = positionXG - velocityG;
    positionYG = positionYG + velocityG;
    ballG.style.left = positionXG + "px";
    ballG.style.top = positionYG + "px";
  }

  if (
    positionXG > Xmax ||
    positionXG === Xmin ||
    positionYG > Ymax ||
    positionYG === Ymin
  ) {
    reverseG = !reverseG;
  }
}

setInterval(moveBall, 65);
