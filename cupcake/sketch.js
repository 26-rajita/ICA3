let img;
let img2;
function preload() {
  img = loadImage('Assets/50a49ad09eeaa3d185cacdd678dd7cf6.png');
}
function setup() {
  createCanvas(800, 600);
  background(220);
}
function draw() {
  image(img,mouseX,mouseY,150,150);
}
function mousePressed() {
  img.resize(100, 2);
}
//Move the cursor to use cupcake as a brush