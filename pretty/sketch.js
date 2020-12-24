let capture;
let cluster = []; //creating a term cluster
let n;

function setup() {
  let c = createCanvas(700, 600); //video being captured (p5 ref)
  //saveCanvas(c, 'myCanvas', 'jpg');
  capture = createCapture(VIDEO);
  capture.hide();
  background(0,50);       
  //noStroke()               
  n = 100;


  for (i = 0; i < n; i++) 
  {
    cluster[i] = new Particle();
    print("new particle created"); 
  }
}

function draw() {
  image(capture, 0, 0, width, height);
  filter(GRAY);
  for (i = 0; i < n; i++) { //for loop to execute update and                                             display command
    cluster[i].display(50) //to execute the display command
    cluster[i].update(100) //to execute the update command

  }


}

function mouseClicked() {
  translate(mouseX, mouseY) //to create particle from origin on the                                       mouseclick
  for (i = 0; i < n; i++) {
    cluster[i] = new Particle(mouseX, mouseY);
    print("new particle created");
  }

}
class Particle {
  constructor() {
    this.size = random(30, 10);
    this.col = color(random(255, 192, 203), random(255, 192, 203), random(255, 192, 203));
    this.str = color(random(), random(), random());
    this.stw = random(2, 8)
    this.posX = random(width * 1, height * 1);
    this.posY = random(width *1, height * 0.1);

    this.velX = random(-5, 10);
    this.velY = random(-10, 10);

  }


  display() { //to show and create the objects on the canvas
    fill(this.col);
    stroke(this.str)
    strokeWeight(this.stw)
    ellipse(this.posX, this.posY, this.size);
    ellipse(mouseX, mouseY, this.size);
    ellipse(this.posX*2, this.posY*2, this.size);
    textSize(this.size)
    //text('yay!',this.posX, this.posY, this.size);
    //text(':o',this.posX, this.posY, this.size);
    text('pretty',this.posX, this.posY, this.size); 
  }

  update() { //to include all the changes after                                           displaying the objects
    this.posX = this.posX + this.velX;
    this.posY = this.posY + this.velY;

    if (this.posX < 0 || this.posX > width) {
      this.velX = -this.velX
    }
    if (this.posY < 0 || this.posY > height) {
      this.velY = -this.velY
    }
  }

}