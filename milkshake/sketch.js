let img;

function preload() {
  img = loadImage('Assets/milkshake.jpg')
}

function setup() {
  img.resize(0, 500)

  createCanvas(img.width, img.height);
  img.loadPixels();
}

function draw() {
 // background(220);

  for (let i = 0; i < 100; i++) {
    let x = random(0, width)
    let y = random(0, height);
   // let r = random(3,mouseX*0.05)
    
    let c = img.get(x, y)
    fill(c[0], c[1], c[2], 150)

    points(x, y, 8)
  }
}

function points(x, y, r) {

  let c = img.get(x, y)
  fill(c[0], c[1], c[2], 150)
  noStroke(1)
  circle(x, y, r)
}