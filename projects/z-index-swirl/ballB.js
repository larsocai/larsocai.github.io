//Set global variable that would contain the position, velocity and the html element "ball"
var positionXB = 200;
var positionYB = 200;
var velocityB = 3;
var reverseB = false;
var ballB = document.getElementById("ballB");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 200;
  var Xmax = 250;

  // two y-axis coordinates
  var Ymin = 200;
  var Ymax = 250;

  if (reverseB) {
    positionXB = positionXB - velocityB;
    positionYB = positionYB - velocityB;
    ballB.style.left = positionXB + "px";
    ballB.style.top = positionYB + "px";
  } else {
    positionXB = positionXB + velocityB;
    positionYB = positionYB + velocityB;
    ballB.style.left = positionXB + "px";
    ballB.style.top = positionYB + "px";
  }

  if (
    positionXB > Xmax ||
    positionXB === Xmin ||
    positionYB > Ymax ||
    positionYB === Ymin
  ) {
    reverseB = !reverseB;
  }
}

setInterval(moveBall, 65);
