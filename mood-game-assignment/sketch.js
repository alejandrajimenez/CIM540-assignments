var question = ["What's my mood today?"];
var randomMood = [];
var currentArea = "";

var stop = false;

var stopWord;
var stopX;
var stopY;

var colorWord;
var colorX;
var colorY;

function setup() {
  createCanvas(500, 500);
  console.log(randomMood);
  randomMood.push("Joyful");
  randomMood.push("Sad");
  randomMood.push("Angry");
  randomMood.push("Disgusted");
  randomMood.push("Surprised");
  randomMood.push("Afraid");
  randomMood.push("Happy");
  randomMood.push("Embarrassed");
  randomMood.push("Trusting");
  randomMood.push("Anxious");
  randomMood.push("Loving");
  console.log(randomMood);
}

function draw() {

  background(255);
  fill("purple");
  ellipse(mouseX, mouseY, 10, 10);
  fill("black");
  textAlign(CENTER);
  textSize(20);
  text(question, 0, 100, width, 100);
  frameRate(10);

  if (stop == false) {
    for (var counter = 0; counter < randomMood.length; counter++) {
      console.log(randomMood[counter]);
      fill(random(255), random(255), random(255), random(255));
      text(randomMood[counter], random(width), random(height));
    }
  }else{
    //add variables for color random
    fill(colorWord, colorX, colorY);
    text(stopWord, stopX, stopY);
  }
}

function mousePressed() {
  stop = true;
  stopWord = random(randomMood);
  stopX = random(300,200);
  stopY = random(300,300);
  colorWord = random(255);
  colorX = random(255);
  colorY = random(255);
  
}