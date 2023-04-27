//Set global variable that would contain the position, velocity and the html element "ball"
var positionXH = 150;
var positionYH = 350;
var velocityH = 3;
var reverseH = false;
var ballH = document.getElementById("ballH");

//write a function that can change the position of the html element "ball"
function moveBall() {

  var Xmin = 100;
  var Xmax = 150;
  var Ymin = 300;
  var Ymax = 350;

  if (reverseH) {
    positionXH = positionXH + velocityH;
    positionYH = positionYH + velocityH;
    ballH.style.left = positionXH + "px";
    ballH.style.top = positionYH + "px";
  } else {
    positionXH = positionXH - velocityH;
    positionYH = positionYH - velocityH;
    ballH.style.left = positionXH + "px";
    ballH.style.top = positionYH + "px";
  }

  if (
    positionXH >= Xmax ||
    positionXH <= Xmin ||
    positionYH >= Ymax ||
    positionYH <= Ymin
  ) {
    reverseH = !reverseH;
  }
}

setInterval(moveBall, 65);
