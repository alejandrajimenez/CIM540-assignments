var pupilY = 60;
var pupilX = 160;
var noseX = 232;
var noseY = 140;

var canvasWidth = 0;
var canvasHeight = 0;

function setup() {
  createCanvas(500,500);
  console.log("current width: " + width);
  console.log("current height: " + height);
  canvasWidth = width;
  canvasHeight = height;
 background(240,20,60);
}

function draw() {
  
  var noseColor = color(255);
  
  //eyes
  fill(255,255,255);
  ellipse(160,60,100,100);
  ellipse(300,60,100,100);
  
  //pupils
  fill(0);
  ellipse(pupilX,pupilY,40,40);
  ellipse(pupilX+140,pupilY,40,40);
  
  //mouth
  fill(255,255,255);
  rect(120,200,220,60);
  
  //teeth
  line(340,230,120,230);
  line(300,260,300,200);
  line(250,260,250,200);
  line(200,260,200,200);
  line(150,260,150,200);
  
  //nose
  fill(noseColor);
  ellipse(noseX,noseY,15,15);
  
  fill(0);
  ellipse(mouseX,mouseY, 20,20);
}