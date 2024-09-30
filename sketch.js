// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(50);
//   background(0);
//   rectMode(CENTER);
// }
// function draw() {
//   background(random(150, 200), random(150, 200), 150, 20);

//   strokeWeight(5);
// noFill()
//   //fill(mousey, 80, 100);
//   stroke(mouseY, 255, 0);
//   ellipse(mouseX + 80, mouseY - 50, mouseX);

//   strokeWeight(1);
//   stroke(0, 255, 0);
//   //fill(150, 200, 0);
//   rect(mouseX, mouseY, 100, 100);
// }
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);
  noStroke()


//cuerpo de robort
  fill(mouseX,mouseY, 20 )
  rect(mouseX, mouseY, 100, 50);
  rect(mouseX, mouseY +55, 100, 50);
  fill(178, 210, 250)
  circle(mouseX -30, mouseY, 15)
  circle(mouseX , mouseY, 15);
  circle(mouseX +30, mouseY, 15);
  rect(mouseX, mouseY + 70, 85, 5);
  rect(mouseX, mouseY + 60, 85, 5);
  rect(mouseX, mouseY + 50, 85, 5);
  rect(mouseX, mouseY + 40, 85, 5);


  // cabeza de robot
  fill(93, 155, 155);
   rect(mouseX, mouseY -50, 70, 40);
  //  antena de robot
  fill(mouseX, mouseY, 20);
  
   rect(mouseX, mouseY - 90, 10, 40);
  fill(178, 210, 250);
  circle(mouseX , mouseY - 110, 15);


   // boca de robot
  fill(178, 210, 250);
   rect(mouseX, mouseY - 38, 30, 5);
   // ojos del robot
  fill(178, 210, 250);
  circle(mouseX -20, mouseY -55, 15);
  circle(mouseX + 20, mouseY - 55, 15);
  fill(0)
  circle(mouseX - 18, mouseY - 55, 10);
  circle(mouseX + 22, mouseY - 55, 10);

  // brazos de robot
  fill(93, 155, 155);
  rect(mouseX -65, mouseY -60, 15, 100);
  rect(mouseX +65, mouseY - 60, 15, 100);
  // manos de robot
  fill(178, 210, 250);
  circle(mouseX + 65, mouseY - 115, 20);
  circle(mouseX - 65, mouseY - 115, 20);


  // Patas de robot
  fill(93, 155, 155);
  rect(mouseX -30, mouseY + 125, 20, 80);
  rect(mouseX +30, mouseY + 125, 20, 80);
  // pies de robot
  fill(178, 210, 250);
  rect(mouseX - 30, mouseY + 173, 20, 10);
  rect(mouseX +30, mouseY + 173, 20, 10);

  // efecto de cuadrado
  noFill();
  stroke(mouseY,mouseX,170);
  rect(mouseX, mouseY, mouseX, mouseY);
}