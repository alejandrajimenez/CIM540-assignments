var brushColor = "black";

var brushSize = 20;

function setup() {
  createCanvas(600,500);
  noStroke();
}

function draw() {

  fill("yellow");
  ellipse(100, 100, 100, 100);
  fill("orange");
  ellipse(100, 250, 100, 100);
  fill("red");
  ellipse(100, 400, 100, 100);
  
  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
}

function mousePressed() {
var d = dist(mouseX, mouseY, 100, 100);
if (d < 100) {
  brushColor = "magenta";
} else if (d > 100){
  brushColor = "black";
}

var d2 = dist(mouseX, mouseY, 100, 250);
if (d2 < 100) {
  brushSize = brushSize + 5;
  brushColor = "purple";
}

var d3 = dist(mouseX, mouseY, 100, 400);
if (d3 < 100) {
  brushSize = brushSize - 3;
  brushColor = "pink";
}
}