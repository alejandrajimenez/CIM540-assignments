var scribble = new Scribble();
var x, y;
var cities = "";
var text = "";

function setup() {
  createCanvas(500, 600);

  x = width / 2;
  y = height / 1.20;
}

function draw() {
  background(255);

  if (cities == "Miami") {
    miami();
  } else if (cities == "LosAngeles") {
    losangeles();
  } else if (cities == "NewYork") {
    newyork();
  } else if (cities == "Seattle") {
    seattle();
  }
}

function keyPressed() {
  if (key == "M") {
    cities = "Miami";
  } else if (key == "N") {
    cities = "NewYork";
  } else if (key == "S") {
    cities = "Seattle";
  } else if (key == "L") {
    cities = "LosAngeles";
  }}

  function miami() {
    textFont("Amatic");
    textSize(36);
    fill(0, 191, 255);
    stroke(0, 191, 255);
    text("Miami",220,70);
    
    //sky
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [150, 150, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(0, 191, 255);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //sun
    strokeWeight(1);
    stroke(250, 210, 10);
    fill(240, 210, 0);
    scribble.scribbleEllipse(350, 210, 50, 50);

    //sea
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [400, 400, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(30, 144, 255);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //sand
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [450, 490, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(240, 230, 140);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //buildings
    //fill(255,255,255);
    var xCoords = [95, 105, 105, 95];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(100, 360, 10, 70);

    var xCoords = [135, 165, 165, 135];
    var yCoords = [300, 300, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 255);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(150, 345, 30, 100);

    var xCoords = [235, 265, 265, 235];
    var yCoords = [305, 325, 415, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(240, 248, 255);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    //scribble.scribbleRect(250, 355, 30, 80);

    var xCoords = [135, 165, 165, 135];
    var yCoords = [300, 300, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 255);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(195, 365, 60, 60);

    var xCoords = [165, 225, 225, 165];
    var yCoords = [335, 335, 415, 415];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 255);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(195, 365, 60, 60);

    var xCoords = [315, 345, 345, 315];
    var yCoords = [285, 285, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(330, 340, 30, 115);

    var xCoords = [350, 410, 410, 350];
    var yCoords = [370, 370, 410, 410];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 255);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(380, 380, 60, 30);

    //land
    strokeWeight(5);
    stroke(107, 142, 25);
    scribble.scribbleLine(80, 400, 420, 400);

    //palm tree
    //Draws a bezier curve from (x1/y1) to (x2/y2). (x3/y3) and (x4/y4) are the coordinates, the curve is pulled to.
    stroke(184, 134, 11);
    strokeWeight(10);
    scribble.scribbleCurve(140, 490, 120, 300, 100, 350, 100, 350);
    stroke(154, 205, 50);
    scribble.scribbleCurve(120, 300, 100, 280, 130, 270, 130, 270);
    scribble.scribbleCurve(120, 300, 200, 350, 150, 250, 250, 250);

    stroke(50, 205, 50);
    scribble.scribbleCurve(120, 300, 180, 380, 150, 250, 200, 250);
    scribble.scribbleCurve(120, 300, 100, 250, 150, 230, 150, 230);
    stroke(154, 205, 50);
    scribble.scribbleCurve(120, 300, 150, 350, 180, 200, 220, 200);
    // Draw a circle
    strokeWeight(1);
    stroke(255, 69, 0);
    fill(255, 69, 0);

    ellipse(x, y, 24, 24);
    // Jiggling randomly on the horizontal axis
    x = x - 1;
    // Moving up at a constant speed
    y = y + random(-1, 1);

    // Reset to the bottom
    if (x < 0) {
      x = width;
    }
  }

  function losangeles() {
    textFont("Amatic");
    textSize(36);
    fill(0, 153, 153);
    stroke(0, 153, 153);
    strokeWeight(1);
    text("Los Angeles",205,70);
    
    //sky
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [150, 150, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(0, 153, 153);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //mountains
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 150, 320, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [280, 230, 420, 420];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(175, 238, 238);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    var xCoords = [160, 300, 420, 160];
    // the y coordinates of the border points of the hachure
    var yCoords = [300, 230, 420, 420];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(175, 238, 238);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    var xCoords = [160, 420, 420, 160];
    // the y coordinates of the border points of the hachure
    var yCoords = [350, 250, 420, 420];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(175, 238, 238);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //hill
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [320, 350, 420, 420];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(0, 153, 153);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //buildings
    var xCoords = [95, 105, 105, 95];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(100, 360, 10, 70);

    var xCoords = [135, 165, 165, 135];
    var yCoords = [300, 300, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(150, 345, 30, 100);

    var xCoords = [235, 265, 265, 235];
    var yCoords = [305, 305, 415, 415];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    //scribble.scribbleRect(250, 355, 30, 80);

    var xCoords = [135, 165, 165, 135];
    var yCoords = [300, 300, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(195, 365, 60, 60);

    var xCoords = [165, 225, 225, 165];
    var yCoords = [335, 335, 415, 415];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(195, 365, 60, 60);

    var xCoords = [315, 345, 345, 315];
    var yCoords = [285, 285, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(330, 340, 30, 115);

    var xCoords = [350, 410, 410, 350];
    var yCoords = [370, 370, 410, 410];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(380, 380, 60, 30);

    var xCoords = [235, 265, 265, 235];
    var yCoords = [305, 325, 415, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    //scribble.scribbleRect(250, 355, 30, 80);

    var xCoords = [260, 310, 310, 260];
    var yCoords = [295, 295, 425, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    //scribble.scribbleRect(250, 355, 30, 80);

    var xCoords = [405, 395, 395, 405];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(100, 360, 10, 70);

    var xCoords = [360, 385, 385, 360];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(100, 360, 10, 70);

    var xCoords = [115, 125, 125, 115];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(100, 360, 10, 70);

    var xCoords = [170, 200, 200, 170];
    var yCoords = [285, 285, 425, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(255, 255, 224);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    //scribble.scribbleRect(250, 355, 30, 80);

    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [400, 400, 430, 430];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(255, 255, 224);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //orange
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [433, 433, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(210, 105, 30);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //street
    // the x coordinates of the border points of the hachure
    var xCoords = [230, 280, 380, 120];
    // the y coordinates of the border points of the hachure
    var yCoords = [430, 430, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(255, 255, 224);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //palm trees
    stroke(0, 139, 139);
    scribble.scribbleLine(140, 460, 140, 250);
    scribble.scribbleCurve(140, 250, 160, 260, 150, 230, 150, 230);
    scribble.scribbleCurve(140, 250, 120, 260, 130, 230, 130, 230);
    scribble.scribbleCurve(140, 250, 160, 230, 150, 230, 150, 230);
    scribble.scribbleCurve(140, 250, 120, 230, 130, 210, 130, 210);
    stroke(0, 128, 130);
    scribble.scribbleLine(120, 480, 120, 210);
    scribble.scribbleCurve(120, 210, 100, 220, 100, 200, 100, 200);
    scribble.scribbleCurve(120, 210, 140, 220, 140, 200, 140, 200);
    scribble.scribbleCurve(120, 210, 100, 190, 110, 180, 110, 180);
    scribble.scribbleCurve(120, 210, 140, 190, 140, 180, 140, 180);
    stroke(47, 79, 79);
    scribble.scribbleLine(100, 500, 100, 180);
    scribble.scribbleCurve(100, 180, 130, 200, 120, 170, 120, 170);
    scribble.scribbleCurve(100, 180, 140, 170, 120, 150, 120, 150);
    scribble.scribbleCurve(100, 180, 85, 170, 100, 150, 100, 150);
    scribble.scribbleCurve(100, 180, 80, 190, 90, 160, 90, 160);


    stroke(0, 139, 139);
    scribble.scribbleLine(360, 460, 360, 250);
    scribble.scribbleCurve(360, 250, 340, 260, 350, 250, 350, 250);
    scribble.scribbleCurve(360, 250, 380, 270, 360, 250, 370, 250);
    scribble.scribbleCurve(360, 250, 375, 255, 375, 210, 375, 210);
    scribble.scribbleCurve(360, 250, 340, 240, 340, 220, 340, 220);
    stroke(0, 128, 130);
    scribble.scribbleLine(380, 480, 380, 210);
    scribble.scribbleCurve(380, 210, 400, 200, 370, 170, 370, 170);
    scribble.scribbleCurve(380, 210, 410, 220, 400, 170, 400, 170);
    scribble.scribbleCurve(380, 210, 360, 220, 360, 170, 360, 170);
    stroke(47, 79, 79);
    scribble.scribbleLine(400, 500, 400, 180);
    scribble.scribbleCurve(400, 180, 415, 200, 420, 170, 420, 170);
    scribble.scribbleCurve(400, 180, 420, 170, 420, 150, 420, 150);
    scribble.scribbleCurve(400, 180, 390, 170, 400, 150, 400, 150);
    scribble.scribbleCurve(400, 180, 380, 190, 380, 160, 380, 160);
  }

  function newyork() {
    textFont("Amatic");
    textSize(36);
    fill(105, 105, 105);
    stroke(105, 105, 105);
    strokeWeight(1);
    text("New York",210,70);
    
    //sky
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [150, 150, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(105, 105, 105);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //moon
    strokeWeight(3);
    stroke(250, 250, 250);
    fill(250, 250, 250);
    scribble.scribbleEllipse(270, 250, 100, 100);

    //sea
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [420, 420, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(0, 25, 51);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //buildings
    //fill(255,255,255);
    var xCoords = [95, 105, 105, 95];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(220, 220, 220);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(100, 360, 10, 70);

    var xCoords = [135, 165, 165, 135];
    var yCoords = [300, 300, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(192, 192, 192);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(150, 345, 30, 100);

    var xCoords = [235, 265, 265, 235];
    var yCoords = [305, 325, 415, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(240, 248, 255);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    //scribble.scribbleRect(250, 355, 30, 80);

    var xCoords = [135, 165, 165, 135];
    var yCoords = [300, 300, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(192, 192, 192);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(195, 365, 60, 60);

    var xCoords = [165, 225, 225, 165];
    var yCoords = [335, 335, 415, 415];
    var gap = 3.5;
    var angle = 315;
    stroke(192, 192, 192);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(195, 365, 60, 60);

    var xCoords = [315, 345, 345, 315];
    var yCoords = [285, 285, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(211, 211, 211);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(330, 340, 30, 115);

    var xCoords = [350, 410, 410, 350];
    var yCoords = [370, 370, 410, 410];
    var gap = 3.5;
    var angle = 315;
    stroke(211, 211, 211);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(380, 380, 60, 30);

    var xCoords = [235, 265, 265, 235];
    var yCoords = [305, 325, 415, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(220, 220, 220);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    //scribble.scribbleRect(250, 355, 30, 80);

    //empire state
    var xCoords = [260, 310, 310, 260];
    var yCoords = [315, 315, 425, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(20, 20, 20);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    //scribble.scribbleRect(250, 355, 30, 80);
    var xCoords = [270, 300, 310, 260];
    var yCoords = [295, 295, 425, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(20, 20, 20);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    var xCoords = [280, 290, 310, 260];
    var yCoords = [265, 265, 425, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(20, 20, 20);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    strokeWeight(3);
    stroke(20, 20, 20);
    scribble.scribbleLine(285, 225, 285, 350);

    var xCoords = [200, 235, 235, 200];
    var yCoords = [285, 285, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(211, 211, 211);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(330, 340, 30, 115);

    var xCoords = [405, 395, 395, 405];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(220, 220, 220);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(100, 360, 10, 70);

    var xCoords = [360, 385, 385, 360];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(220, 220, 220);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(100, 360, 10, 70);

    var xCoords = [115, 125, 125, 115];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(220, 220, 220);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    scribble.scribbleRect(100, 360, 10, 70);

    //second pointy building
    var xCoords = [170, 200, 200, 170];
    var yCoords = [315, 315, 425, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(20, 20, 20);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    //scribble.scribbleRect(250, 355, 30, 80);
    var xCoords = [175, 195, 200, 170];
    var yCoords = [300, 300, 425, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(20, 20, 20);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    var xCoords = [180, 190, 200, 170];
    var yCoords = [285, 285, 425, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(20, 20, 20);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    strokeWeight(3);
    stroke(20, 20, 20);
    scribble.scribbleLine(185, 265, 185, 350);

    //lights og buildings
    stroke(255, 250, 205),
      scribble.scribbleEllipse(338, 290, 5, 5);
    scribble.scribbleEllipse(323, 290, 5, 5);
    scribble.scribbleEllipse(338, 310, 5, 5);
    scribble.scribbleEllipse(323, 310, 5, 5);
    scribble.scribbleEllipse(338, 330, 5, 5);
    scribble.scribbleEllipse(323, 330, 5, 5);
    scribble.scribbleEllipse(338, 350, 5, 5);
    scribble.scribbleEllipse(323, 350, 5, 5);
    scribble.scribbleEllipse(323, 370, 5, 5);
    scribble.scribbleEllipse(338, 370, 5, 5);
    scribble.scribbleEllipse(323, 390, 5, 5);
    scribble.scribbleEllipse(338, 390, 5, 5);

    scribble.scribbleEllipse(210, 300, 5, 5);
    scribble.scribbleEllipse(226, 300, 5, 5);
    scribble.scribbleEllipse(210, 320, 5, 5);
    scribble.scribbleEllipse(226, 320, 5, 5);
    scribble.scribbleEllipse(210, 340, 5, 5);
    scribble.scribbleEllipse(226, 340, 5, 5);
    scribble.scribbleEllipse(210, 360, 5, 5);
    scribble.scribbleEllipse(226, 360, 5, 5);
    scribble.scribbleEllipse(210, 380, 5, 5);
    scribble.scribbleEllipse(226, 380, 5, 5);
    scribble.scribbleEllipse(210, 400, 5, 5);
    scribble.scribbleEllipse(226, 400, 5, 5);

    //lights of empire state b
    scribble.scribbleEllipse(285, 290, 5, 5);
    scribble.scribbleEllipse(285, 275, 5, 5);
    scribble.scribbleEllipse(278, 305, 5, 5);
    scribble.scribbleEllipse(292, 305, 5, 5);
    scribble.scribbleEllipse(270, 325, 5, 5);
    scribble.scribbleEllipse(285, 325, 5, 5);
    scribble.scribbleEllipse(300, 325, 5, 5);
    scribble.scribbleEllipse(270, 340, 5, 5);
    scribble.scribbleEllipse(285, 340, 5, 5);
    scribble.scribbleEllipse(300, 340, 5, 5);
    scribble.scribbleEllipse(270, 355, 5, 5);
    scribble.scribbleEllipse(285, 355, 5, 5);
    scribble.scribbleEllipse(300, 355, 5, 5);
    scribble.scribbleEllipse(270, 370, 5, 5);
    scribble.scribbleEllipse(285, 370, 5, 5);
    scribble.scribbleEllipse(300, 370, 5, 5);
    scribble.scribbleEllipse(270, 385, 5, 5);
    scribble.scribbleEllipse(285, 385, 5, 5);
    scribble.scribbleEllipse(300, 385, 5, 5);
    scribble.scribbleEllipse(270, 400, 5, 5);
    scribble.scribbleEllipse(285, 400, 5, 5);
    scribble.scribbleEllipse(300, 400, 5, 5);

    scribble.scribbleEllipse(143, 305, 5, 5);
    scribble.scribbleEllipse(158, 305, 5, 5);
    scribble.scribbleEllipse(143, 320, 5, 5);
    scribble.scribbleEllipse(158, 320, 5, 5);
    scribble.scribbleEllipse(143, 335, 5, 5);
    scribble.scribbleEllipse(158, 335, 5, 5);
    scribble.scribbleEllipse(143, 350, 5, 5);
    scribble.scribbleEllipse(158, 350, 5, 5);
    scribble.scribbleEllipse(143, 365, 5, 5);
    scribble.scribbleEllipse(158, 365, 5, 5);
    scribble.scribbleEllipse(143, 380, 5, 5);
    scribble.scribbleEllipse(158, 380, 5, 5);
    scribble.scribbleEllipse(143, 395, 5, 5);
    scribble.scribbleEllipse(158, 395, 5, 5);

    scribble.scribbleEllipse(100, 335, 4, 4);
    scribble.scribbleEllipse(100, 355, 4, 4);
    scribble.scribbleEllipse(100, 375, 4, 4);
    scribble.scribbleEllipse(100, 395, 4, 4);

    scribble.scribbleEllipse(120, 335, 2, 2);
    scribble.scribbleEllipse(120, 355, 2, 2);
    scribble.scribbleEllipse(120, 375, 2, 2);
    scribble.scribbleEllipse(120, 395, 2, 2);

    scribble.scribbleEllipse(400, 335, 2, 2);
    scribble.scribbleEllipse(400, 355, 2, 2);
    scribble.scribbleEllipse(400, 375, 2, 2);
    scribble.scribbleEllipse(400, 395, 2, 2);

    scribble.scribbleEllipse(378, 340, 3, 3);
    scribble.scribbleEllipse(367, 340, 3, 3);
    scribble.scribbleEllipse(378, 360, 3, 3);
    scribble.scribbleEllipse(367, 360, 3, 3);
    scribble.scribbleEllipse(378, 380, 3, 3);
    scribble.scribbleEllipse(367, 380, 3, 3);
    scribble.scribbleEllipse(378, 400, 3, 3);
    scribble.scribbleEllipse(367, 400, 3, 3);

    scribble.scribbleEllipse(390, 373, 1, 1);
    scribble.scribbleEllipse(390, 388, 1, 1);
    scribble.scribbleEllipse(390, 403, 1, 1);
    scribble.scribbleEllipse(355, 373, 1, 1);
    scribble.scribbleEllipse(355, 388, 1, 1);
    scribble.scribbleEllipse(355, 403, 1, 1);

    scribble.scribbleEllipse(250, 320, 2, 2);
    scribble.scribbleEllipse(240, 320, 2, 2);
    scribble.scribbleEllipse(250, 340, 2, 2);
    scribble.scribbleEllipse(240, 340, 2, 2);
    scribble.scribbleEllipse(250, 360, 2, 2);
    scribble.scribbleEllipse(240, 360, 2, 2);
    scribble.scribbleEllipse(250, 380, 2, 2);
    scribble.scribbleEllipse(240, 380, 2, 2);
    scribble.scribbleEllipse(250, 400, 2, 2);
    scribble.scribbleEllipse(240, 400, 2, 2);

    scribble.scribbleEllipse(185, 295, 5, 5);
    scribble.scribbleEllipse(185, 310, 5, 5);
    scribble.scribbleEllipse(190, 325, 4, 4);
    scribble.scribbleEllipse(180, 325, 4, 4);
    scribble.scribbleEllipse(190, 340, 4, 4);
    scribble.scribbleEllipse(180, 340, 4, 4);
    scribble.scribbleEllipse(190, 355, 4, 4);
    scribble.scribbleEllipse(180, 355, 4, 4);
    scribble.scribbleEllipse(190, 370, 4, 4);
    scribble.scribbleEllipse(180, 370, 4, 4);
    scribble.scribbleEllipse(190, 385, 4, 4);
    scribble.scribbleEllipse(180, 385, 4, 4);
    scribble.scribbleEllipse(190, 400, 4, 4);
    scribble.scribbleEllipse(180, 400, 4, 4);
  }

  function seattle() {
    textFont("Amatic");
    textSize(36);
    fill(0, 153, 153);
    stroke(0, 153, 153);
    strokeWeight(1);
    text("Seattle",220,70);
    
    //sky
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [150, 150, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(0, 153, 153);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //clouds
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [280, 280, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(0, 204, 204);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //mountains
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 150, 320, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [320, 310, 420, 420];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(95, 158, 160);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    var xCoords = [160, 300, 420, 160];
    // the y coordinates of the border points of the hachure
    var yCoords = [350, 350, 420, 420];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(95, 158, 160);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //white
    strokeWeight(5);
    stroke(0, 0, 128);
    scribble.scribbleLine(222, 245, 222, 410);

    stroke(255, 255, 255);

    scribble.scribbleCurve(250, 250, 250, 410, 220, 290, 220, 330);
    scribble.scribbleCurve(200, 250, 200, 410, 220, 290, 220, 330);
    fill(255);
    scribble.scribbleEllipse(225, 240, 70, 30);
    scribble.scribbleEllipse(225, 220, 30, 10);

    stroke(0, 0, 128);
    scribble.scribbleLine(193, 245, 258, 245);
    scribble.scribbleLine(213, 215, 237, 215);

    stroke(0, 0, 102);
    scribble.scribbleLine(190, 240, 260, 240)
    scribble.scribbleLine(200, 230, 250, 230);
    scribble.scribbleLine(225, 198, 225, 210);

    //buildings
    var xCoords = [95, 105, 105, 95];
    var yCoords = [350, 350, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);


    var xCoords = [135, 165, 165, 135];
    var yCoords = [345, 345, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);


    var xCoords = [235, 265, 265, 235];
    var yCoords = [325, 325, 415, 415];
    var gap = 3.5;
    var angle = 315;
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);



    var xCoords = [165, 225, 225, 165];
    var yCoords = [335, 335, 415, 415];
    var gap = 3.5;
    var angle = 315;
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);


    var xCoords = [315, 345, 345, 315];
    var yCoords = [305, 305, 430, 430];
    var gap = 3.5;
    var angle = 315;
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);


    var xCoords = [350, 410, 410, 350];
    var yCoords = [370, 370, 410, 410];
    var gap = 3.5;
    var angle = 315;
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);


    var xCoords = [335, 365, 365, 335];
    var yCoords = [295, 295, 415, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    var xCoords = [260, 310, 310, 260];
    var yCoords = [305, 305, 425, 425];
    var gap = 3.5;
    var angle = 315;
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);


    var xCoords = [405, 395, 395, 405];
    var yCoords = [350, 350, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);


    var xCoords = [360, 385, 385, 360];
    var yCoords = [330, 330, 420, 420];
    var gap = 3.5;
    var angle = 215;
    strokeWeight(2);
    stroke(0, 139, 139);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //green
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [410, 410, 430, 430];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(34, 139, 34);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [420, 430, 430, 430];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(154, 205, 50);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //water
    // the x coordinates of the border points of the hachure
    var xCoords = [80, 420, 420, 80];
    // the y coordinates of the border points of the hachure
    var yCoords = [433, 433, 520, 520];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(70, 130, 180);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    //moon
    fill(245, 245, 245);
    stroke(245, 245, 245);
    scribble.scribbleEllipse(360, 200, 50, 50);

    //ships
    // the x coordinates of the border points of the hachure
    var xCoords = [300, 300, 320, 260];
    // the y coordinates of the border points of the hachure
    var yCoords = [420, 420, 480, 480];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(245, 245, 245);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    stroke(0, 0, 102);
    strokeWeight(9);
    scribble.scribbleLine(260, 485, 320, 485);

    // the x coordinates of the border points of the hachure
    var xCoords = [150, 150, 180, 150];
    // the y coordinates of the border points of the hachure
    var yCoords = [400, 400, 450, 450];
    // the gap between two hachure lines
    var gap = 3.5;
    // the angle of the hachure in degrees
    var angle = 315;
    // set the thikness of our hachure lines
    strokeWeight(3);
    //set the color of the hachure to a nice blue
    stroke(245, 245, 245);
    // fill the rect with a hachure
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);

    stroke(0, 0, 102);
    strokeWeight(7);
    scribble.scribbleLine(150, 450, 180, 450);
  }