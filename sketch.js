var box1
var box2
function setup() {
  createCanvas(800, 800);
  //box1 = createSprite(200,200,50,50)
  box2 = createSprite(100,100,100,100)
}

function draw() {
  background(0);

  if(keyDown("shift")){
    box2.y=box2.y +10
  }
  drawSprites()
}

