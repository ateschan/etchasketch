var knobLR = document.getElementById("knobLR-inner");
var pointerLR = document.getElementById("knobLR-pointer");

var centerLR = 0;
var mouseIsDownLR = false;
var distanceLR: number;

function clamp(value, max, min) {
  if (value > max) return max;
  if (value < min) return min;
  return value;
}
if (knobLR){
    knobLR.addEventListener("mousedown", (e) => {
        centerLR = e.pageY;
        mouseIsDownLR = true;
      });
      
      knobLR.addEventListener("mouseup", (e) => {
        mouseIsDownLR = false;
      });
      
      knobLR.addEventListener("mousemove", (e) => {
        if (mouseIsDownLR) {
          distanceLR = clamp(centerLR - e.pageY, 100, -100);
          if (knobLR){
            knobLR.style.transform = "rotate(" + distanceLR * 1.35 + "deg)";
          }
        }
      });
}

var knobUD = document.getElementById("knobUD-inner");
var pointerUD = document.getElementById("knobUD-pointer");

var centerUD = 0;
var mouseIsDownUD = false;
var distanceUD: number;


if (knobUD){
    knobUD.addEventListener("mousedown", (e) => {
        centerUD = e.pageY;
        mouseIsDownUD = true;
      });
      
      knobUD.addEventListener("mouseup", (e) => {
        mouseIsDownUD = false;
      });
      
      knobUD.addEventListener("mousemove", (e) => {
        if (mouseIsDownUD) {
          distanceUD = clamp(centerUD - e.pageY, 100, -100);
          if(knobUD){
            knobUD.style.transform = "rotate(" + distanceUD * 1.35 + "deg)";
          }
        }
      });
}


