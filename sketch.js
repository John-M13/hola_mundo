// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(24);
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
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(0);

  rect(mouseX, mouseY, 70, 200);
  ellipse(mouseX, mouse);
}
