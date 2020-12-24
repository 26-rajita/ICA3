
// move the slider to see many needles poking

var angle
var slider

function setup() {
  createCanvas(700, 400);
  angleMode(DEGREES)
  slider = createSlider(5, 60, 60, 0.10);
  slider.position(250);
}

function draw() {
  background(220, 20, 60)
  translate(width * 0.5, height * 0.5)
  angle = slider.value();
  stroke(550, 200)
  let len = 500
  needle(len)
}

function needle(len) {
  x = random(0, width)
  y = random(0, height)
  line(x, y, 0, -len)
  translate(0, -len)

  if (len > 4) {
    push()
    rotate(angle);
    needle(len * 0.4)
    pop()

    push()
    rotate(-angle);
    needle(len * 0.4)
    pop()

    push()
    rotate(-angle * 1);
    needle(len * 0.5)
    pop()

    push()
    rotate(angle * 1);
    needle(len * 0.5)
    pop()

  }



}