function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(0);
  rectMode(CENTER)
}
function draw() {
  background(random(150, 200), random(150, 200), 150);
  fill(mouseX, 255, 120)
  ellipse(mouseX+80, mouseY-50, mouseX)
    fill(150, 200, 0)
  rect(mouseX, mouseY, 100, 100);
}
