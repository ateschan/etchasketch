var knobLR = document.getElementById("knobLR-inner");
var pointerLR = document.getElementById("knobLR-pointer");
var centerLR = 0;
var mouseIsDownLR = false;
var distanceLR; // This is the value that corresponds to the rotation of the LR dial
function changeColor() {
    var color = document.getElementById("current-color");
    if (color) {
        color.addEventListener('change', function (e) {
            var currentcolor = document.getElementById("current-color").value;
            console.log(currentcolor);
        });
    }
}
;
changeColor();
function clamp(value, max, min) {
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
        distanceLR = clamp(centerLR - e.pageY, 100, -100);
        if (knobLR) {
            knobLR.style.transition = "all .5s";
            knobLR.style.transform = "rotate(" + 0 + "deg)";
        }
    });
    knobLR.addEventListener("mousemove", function (e) {
        if (mouseIsDownLR) {
            distanceLR = clamp(centerLR - e.pageY, 100, -100);
            if (knobLR) {
                knobLR.style.transition = "all 0s";
                knobLR.style.transform = "rotate(" + distanceLR * 1.35 + "deg)";
            }
        }
    });
}
var knobUD = document.getElementById("knobUD-inner");
var pointerUD = document.getElementById("knobUD-pointer");
var centerUD = 0;
var mouseIsDownUD = false;
var distanceUD; // This is the value that corresponds to the rotation of the UD dial
if (knobUD) {
    knobUD.addEventListener("mousedown", function (e) {
        centerUD = e.pageY;
        mouseIsDownUD = true;
    });
    knobUD.addEventListener("mouseup", function (e) {
        mouseIsDownUD = false;
        distanceUD = clamp(centerUD - e.pageY, 100, -100);
        if (knobUD) {
            knobUD.style.transition = "all .5s";
            knobUD.style.transform = "rotate(" + 0 + "deg)";
        }
    });
    knobUD.addEventListener("mousemove", function (e) {
        if (mouseIsDownUD) {
            distanceUD = clamp(centerUD - e.pageY, 100, -100);
            if (knobUD) {
                knobUD.style.transition = "all 0s";
                knobUD.style.transform = "rotate(" + distanceUD * 1.35 + "deg)";
            }
        }
    });
}
//Create grid system using js -----------------------------------------------------------------------                           2
//define blank rows and columns accoring to a grid value on a slider, default = 100x100
//for x rows, make x columns in that row
//make sure the grid is made out of the borders given to the rows and columns
//make the continers clickable and change the background to black based on that
//finally implement knob logic that changes the velocity of the active cursor based on the distance turned by the knob
//make row slider -----------------------------------------------------------------------                                        1
var gridcount = document.getElementById("myRange").value;
var gridSlider = document.getElementById("myRange");
function updateGridCount(gridCt) {
    console.log("TEST CASE PASSED!" + gridcount);
    if (gridcount) {
        var scaleText = document.getElementById("scale");
        if (scaleText) {
            scaleText.textContent = "Grid Scale: " + gridCt;
        }
        else {
            throw ("ScaleText is null, val: " + gridCt);
        }
    }
    else {
        throw ("GridCount is null, val:" + gridcount);
    }
}
if (gridSlider) {
    gridSlider.addEventListener('mouseup', function () {
        gridcount = document.getElementById("myRange").value;
        updateGridCount(parseInt(gridcount));
    });
}
//make color slider -----------------------------------------------------------------------                                       3
