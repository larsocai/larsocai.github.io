var positionXF = 150;
var positionYF = 150;
var velocityF = 3;
var reverseF = false;
var ballF = document.getElementById("ballF");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 150;
  var Xmax = 200;

  // two y-axis coordinates
  var Ymin = 150;
  var Ymax = 200;

  if (reverseF) {
    positionXF = positionXF - velocityF;
    positionYF = positionYF - velocityF;
    ballF.style.left = positionXF + "px";
    ballF.style.top = positionYF + "px";
  } else {
    positionXF = positionXF + velocityF;
    positionYF = positionYF + velocityF;
    ballF.style.left = positionXF + "px";
    ballF.style.top = positionYF + "px";
  }

  if (
    positionXF > Xmax ||
    positionXF === Xmin ||
    positionYF > Ymax ||
    positionYF === Ymin
  ) {
    reverseF = !reverseF;
  }
}

setInterval(moveBall, 65);