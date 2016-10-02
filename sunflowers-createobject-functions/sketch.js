var centerX = 0;
var centerY = 0;
var scaling = 2;

function setup() {
  createCanvas(800, 800);
  centerX = width/2;
  centerY = height/2;

  background(color('hsb(55, 30%, 100%)'));

  for(var i = 0; i < 100; i++){
    multiDrawing(random(width/2),random(height/2), random(0.0,3.0));
  }
}

function draw() {
}

function multiDrawing(posX, posY, scales){
  push();
  translate(posX, posY);
  scale(scales);
  //tusk
  noFill();
  strokeWeight(10);
  stroke(50,190,10);
  arc(220, 330, 180, 180, HALF_PI, PI);
  
  //petals
  stroke(255, 204, 0);
  fill(255,215,0);
  ellipse(200,260,80,80);
  ellipse(140,170,80,80);
  ellipse(80,200,80,80);
  ellipse(80,260,80,80);
  ellipse(200,200,80,80);
  ellipse(140,300,80,80);
  
  //center
  stroke(230,170,50);
  fill(220,170,50);
  ellipse(140,232,150,150);
  pop();
  
}

function mousePressed(){
  for(var i = 0; i < 100; i++){
    multiDrawing(random(width/2),random(height/2), random(0.0,2.0));
  }
}