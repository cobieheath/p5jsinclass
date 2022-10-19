const canvasWidth = 400;
const canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  console.log(canvasWidth);
  rectMode(CENTER)
}

let x = 0;

function draw() {
  background(125);
  
  if (x < 160){
    x++;
  }

  noStroke ()
  rect(x, 200, 40, 40); 
  rect(400-x,200,40,40);
  rect(200,400-x,40,40);
  rect(200,x,40,40);
  rect(x,x, 40,40);
  rect(400-x,x, 40,40);
  rect(x, 400-x, 40,40);
  rect(400-x,400-x,40,40);

  if (x == 160) {
    x = 0
  }

  describe("8 white squares moving towards middle of gray square and repeating")
} 
 