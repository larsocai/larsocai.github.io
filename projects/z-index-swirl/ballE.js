//Set global variable that would contain the position, velocity and the html element "ball"
var positionXE = 50;
var positionYE = 250;
var velocityE = 3;
var reverseE = false;
var ballE = document.getElementById("ballE");


//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 50;
  var Xmax = 100;

  // two y-axis coordinates
  var Ymin = 200;
  var Ymax = 250;

  if (reverseE) {
    positionXE = positionXE - velocityE;
    positionYE = positionYE + velocityE;
    ballE.style.left = positionXE + "px";
    ballE.style.top = positionYE + "px";
  } else {
    positionXE = positionXE + velocityE;
    positionYE = positionYE - velocityE;
    ballE.style.left = positionXE + "px";
    ballE.style.top = positionYE + "px";
  }

  if (
    positionXE > Xmax ||
    positionXE === Xmin ||
    positionYE > Ymax ||
    positionYE === Ymin
  ) {
    reverseE = !reverseE;
  }
}

setInterval(moveBall, 65);
