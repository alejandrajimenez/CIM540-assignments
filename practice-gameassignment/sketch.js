var question = ["What's my mood today?"];
var randomMood = [];
var currentArea = "";

function setup() {
  createCanvas(500,500);
  
  console.log(randomMood);
  randomMood.push("Joy");
  randomMood.push("Sadness");
  randomMood.push("Anger");
  randomMood.push("Disgust");
  randomMood.push("Surprise");
  randomMood.push("Fear");
  randomMood.push("Happiness");
  randomMood.push("Embarrassment");
  randomMood.push("Trust");
  randomMood.push("Anticipation");
  randomMood.push("Love");
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
  for(var counter = 0; counter < randomMood.length; counter++){
    console.log(randomMood[counter]);
    fill(random(255), random(255),random(255),random(255));
    text(randomMood[counter], random(width), random(height));
    
  }
  
    while(randomMood.length > 10){
    var currentMood = randomMood.pop();
    text(currentMood, random(width), random(height));
  }
  
  function mousePressed(){
    /*var stop = dist(mouseX, mouseY, 400, 400);
    if(stop < 400){
      currentMood = 0;
      frameRate(0);
    }*/
    
    /*while(randomMood.length < 10){
      var currentMood = randomMood.pop();
      text(currentMood, random(randomMood.push));
    }*/
  }
  
}

