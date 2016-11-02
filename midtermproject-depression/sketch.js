var textTitle = "Types of Depression";
var textSubtitle = "Click on each face to learn more about depression.";
var textDysthymia = "Dysthymia";
var textSituational = "Situational";
var textAtypical = "Atypical";
var textBipolar = "Bipolar Disorder";
var textPsychotic = "Psychotic";
var textPremenstrual = "Premenstrual Dysphoric Depression (PMDD)";
var textPostpartum = "Postpartum";
var textMajor = "Major Depression";
var textSeasonal = "Seasonal Affective Disorder (SAD)";

var textDysdef = "These symptoms persist for 2 years or longer: Change in your apetite (not eating enough or overeating), Sleep too much or too little, Lack of energy, Low self-esteem, Trouble concentrating or making decisions, Hopelessness.";
var textSitdef = "You can have a depressed mood when you're having trouble managing a stressful event in your life, such as a death in your family, a divorce, or losing your job. Your doctor may call this Stress Response Syndrome.";
var textAtydef = "Different. It is considered to be a specifier that describes a pattern of depressive symptoms. If you have atypical depression, a positive event can temporarily improve your mood. Also, you may have increased appetite, sleeping more than usual, feeling of heaviness in your arms and legs, and be oversensitive to criticism.";
var textBipdef = "Also referred to as manic depression, they have mood episodes that range from extremes of high energy with an up-mood to low-depressive periods. When in low phase, you'll have the symptoms of major depression. When in manic episode, you'll have rapid speech, high energy, lack of sleep, grandiose delusions, and racing thoughts.";
var textPsydef = "They have symptoms of major depression along with psychotic symptooms, such as: hallucinations-seeing or hearing things that aren't there, delusions-false beliefs, and paranoia-wrongly believing that others are trying to harm you.";
var textPredef = "Women with PMDD have depression and other symptoms at the start of their period. They may also have: mood swings, irritability, anxiety, trouble concentrating, fatigue, change in appetite or sleep habits, feelings of being overwhelmed.";
var textPosdef = "Women who have major depression in the weeks and months after childbirth may have postpartum depression. Antidepressant drugs can help similarly to trating major depression that is unrelated to childbirth.";
var textMajdef = "Feel depressed most of the time for most days of the week. Some of the symptoms are: loss of interest or pleasure in your activities, weight loss or gain, trouble getting to sleep or feeling sleepy during the day, being tired and without energy, thoughts of suicide, feeling worthless or guilty, trouble concentrating or making decisions, feeling restless and agitated, or else very sluggish and slowed down physically or mentally.";
var textSeadef = "A period of major depression that most often happens during the winter months, when the days grow short and you get less and less sunlight. It typically goes away in the spring and summer. Light therapy can help.";

var currentArea = "";

function setup() {
  createCanvas(600, 750);
}

function draw() {
  //background(255);
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textFont("Archer");
  text(textTitle, 300, 50);

  textSize(18);
  textStyle(NORMAL);
  text(textSubtitle, 295, 90);
  text(textDysthymia, 120, 170);
  text(textSituational, 300, 170);
  text(textAtypical, 480, 170);
  text(textBipolar, 120, 370);
  text(textPsychotic, 300, 370);
  text(textPremenstrual, 365, 350, 250);
  text(textPostpartum, 120, 570);
  text(textMajor, 300, 570);
  text(textSeasonal, 385, 550, 200);

  strokeWeight(5);
  strokeCap(ROUND);
  line(70, 105, 530, 105);

  //first column - first row - dysthymia
  fill(255, 220, 5);
  ellipse(120, 250, 120, 120);
  ellipse(105, 230, 5, 5);
  ellipse(135, 230, 5, 5);
  line(90, 260, 150, 260);

  //second column - first row - situational
  ellipse(300, 250, 120, 120);
  ellipse(285, 230, 5, 5);
  ellipse(315, 230, 5, 5);
  noFill();
  arc(300, 300, 80, 80, 10, 100);

  //first column - second row - bipolar
  fill(255, 220, 5);
  ellipse(120, 450, 120, 120);
  ellipse(135, 430, 5, 5);
  fill(255);
  ellipse(105, 430, 22, 22);
  ellipse(105, 430, 5, 5);
  noFill();
  arc(113, 499, 50, 50, 5, 100);
  //arc(110,470,45,40,40,35);
  arc(117, 450, 50, 50, HALF_PI, PI);

  //secon column - second row - psychotic
  fill(255, 220, 5);
  ellipse(300, 450, 120, 120);
  ellipse(285, 430, 5, 5);
  ellipse(315, 430, 5, 5);
  fill(255);
  rect(260, 455, 80, 20, 8);
  line(260, 465, 340, 465);

  //second column - third row - major depression
  fill(255, 220, 5);
  ellipse(300, 650, 120, 120);
  noFill();
  arc(283, 635, 25, 25, 10, 100);
  arc(317, 635, 25, 25, 10, 100);
  arc(300, 700, 80, 80, 10, 100);

  //first column - third row - postpartum
  fill(255, 220, 5);
  ellipse(120, 650, 120, 120);
  line(95, 635, 112, 627);
  line(130, 627, 147, 637);
  arc(121, 685, 50, 50, 10, 100);

  //third column - first row - atypical
  ellipse(480, 250, 120, 120);
  ellipse(465, 230, 5, 5);
  ellipse(495, 230, 5, 5);
  line(510, 260, 450, 270);

  //third column - second row - pmdd
  ellipse(480, 450, 120, 120);
  noFill();
  arc(460, 426, 18, 18, 75, 35);
  arc(500, 426, 18, 18, 75, 35);
  arc(480, 480, 50, 50, 10, 100);

  //third column - seasonal
  fill(255, 220, 5);
  ellipse(480, 650, 120, 120);
  ellipse(505, 625, 5, 5);
  ellipse(490, 625, 5, 5);
  line(510, 675, 450, 660);
  
 //first row
  if (mouseY >= 190 && mouseY < 310) {
    console.log("Inside first row area");
  } if (mouseX > 57 && mouseX < 180) {
    console.log("area1");
    currentArea = "area1";
  } else if (mouseX > 240 && mouseX < 360){
    console.log("area2");
    currentArea = "area2";
  } else if (mouseX > 415 && mouseX < 540){
    console.log("area3");
    currentArea = "area3";
  } else {
    currentArea = "";
    console.log("");
  }

//second row
if (mouseY >= 390 && mouseY < 510) {
    console.log("Inside second row area");
   if (mouseX > 57 && mouseX < 180) {
    console.log("area4");
    currentArea = "area4";
  } else if (mouseX > 240 && mouseX < 360){
    console.log("area5");
    currentArea = "area5";
  } else if (mouseX > 415 && mouseX < 540){
    console.log("area6");
    currentArea = "area6";
  }else{
    currentArea = "";
    console.log("");
  }
}
  
  //third row
  if (mouseY >= 590 && mouseY < 710) {
    console.log("Inside third row area");
  if (mouseX > 57 && mouseX < 180) {
    console.log("area7");
    currentArea = "area7";
  } else if (mouseX > 240 && mouseX < 360){
    console.log("area8");
    currentArea = "area8";
  } else if (mouseX > 415 && mouseX < 540){
    console.log("area9");
    currentArea = "area9";
  }else{
    currentArea = "";
    console.log("");
  }
}

/*if ("area1" == true) {
    fill(255);
    rect(200, 160, 320, 140, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textDysdef, 215, 130, 300, 200);
  } else if ("area2" == true){
    fill(255);
    rect(200, 20, 320, 140, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textSitdef, 215, -10, 300, 200);
  } else if ("area3" == true){
    fill(255);
    rect(90, 140, 310, 175, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textAtydef, 102, 130, 300, 200);
  } if ("area4" == true){
    fill(255);
    rect(195, 360, 365, 170, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textBipdef, 210, 345, 350, 200);
  } else if ("area5" == true){
    fill(255);
    rect(155, 190, 315, 150, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textPsydef, 165, 165, 325, 200);
  } else if ("area6" == true){
    fill(255);
    rect(90, 350, 310, 140, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textPredef, 103, 320, 300, 200);
  } else if ("area7" == true){
    fill(255);
    rect(195, 560, 325, 130, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textPosdef, 205, 525, 325, 200);
  } else if ("area8" == true){
    fill(255);
    rect(155, 350, 360, 200, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textMajdef, 170, 350, 340, 200);
  } else if ("area9" == true){
    fill(255);
    rect(80, 550, 320, 125, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textSeadef, 88, 512, 310, 200);
  } else if ("" == true){
    clear();
  }*/
}

function mousePressed() {
  if (currentArea == "area1") {
    fill(255);
    rect(200, 160, 320, 140, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textDysdef, 215, 130, 300, 200);
  } else if (currentArea == "area2"){
    fill(255);
    rect(200, 20, 320, 140, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textSitdef, 215, -10, 300, 200);
  } else if (currentArea == "area3"){
    fill(255);
    rect(90, 140, 310, 175, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textAtydef, 102, 130, 300, 200);
  } if (currentArea == "area4"){
    fill(255);
    rect(195, 360, 365, 170, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textBipdef, 210, 345, 350, 200);
  } else if (currentArea == "area5"){
    fill(255);
    rect(155, 190, 315, 150, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textPsydef, 165, 165, 325, 200);
  } else if (currentArea == "area6"){
    fill(255);
    rect(90, 350, 310, 140, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textPredef, 103, 320, 300, 200);
  } else if (currentArea == "area7"){
    fill(255);
    rect(195, 560, 325, 130, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textPosdef, 205, 525, 325, 200);
  } else if (currentArea == "area8"){
    fill(255);
    rect(155, 350, 360, 200, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textMajdef, 170, 350, 340, 200);
  } else if (currentArea == "area9"){
    fill(255);
    rect(80, 550, 320, 125, 25);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text(textSeadef, 88, 512, 310, 200);
  } else if (currentArea == ""){
    clear();
  }
}