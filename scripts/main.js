var knobLR = document.getElementById("knobLR-inner");
var pointerLR = document.getElementById("knobLR-pointer");
var centerLR = 0;
var mouseIsDownLR = false;
var distanceLR;
function clampLR(value, max, min) {
    if (value > max)
        return max;
    if (value < min)
        return min;
    return value;
}
if (knobLR) {
    knobLR.addEventListener("mousedown", function (e) {
        centerLR = e.pageY;
        mouseIsDownLR = true;
    });
    knobLR.addEventListener("mouseup", function (e) {
        mouseIsDownLR = false;
    });
    knobLR.addEventListener("mousemove", function (e) {
        if (mouseIsDownLR) {
            distanceLR = clampLR(centerLR - e.pageY, 100, -100);
            knobLR.style.transform = "rotate(" + distanceLR * 1.35 + "deg)";
        }
    });
}
var knobUD = document.getElementById("knobUD-inner");
var pointerUD = document.getElementById("knobUD-pointer");
var centerUD = 0;
var mouseIsDownUD = false;
var distanceUD;
function clampUD(value, max, min) {
    if (value > max)
        return max;
    if (value < min)
        return min;
    return value;
}
if (knobUD) {
    knobUD.addEventListener("mousedown", function (e) {
        centerUD = e.pageY;
        mouseIsDownUD = true;
    });
    knobUD.addEventListener("mouseup", function (e) {
        mouseIsDownUD = false;
    });
    knobUD.addEventListener("mousemove", function (e) {
        if (mouseIsDownUD) {
            distanceUD = clampUD(centerUD - e.pageY, 100, -100);
            knobUD.style.transform = "rotate(" + distanceUD * 1.35 + "deg)";
        }
    });
}
