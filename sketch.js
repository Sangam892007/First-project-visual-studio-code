function setup() {
  createCanvas(800,400);
  A = createSprite(400, 200, 50, 50);
  A.shapeColor = "Red";
  B = createSprite(600,100,100,20);
  B.shapeColor = "Green";
}

function draw() {
  background(255,255,255);  
  B.x = mouseX;
  B.y = mouseY;
  drawSprites();
  
  isTouching();
}

function isTouching(){
if (B.x - A.x <= A.width/2 + B.width/2 &&
    A.x - B.x <= A.width/2 + B.width/2 &&
    A.y - B.y <= A.height/2 + B.height/2 &&
    B.y - A.y <= A.height/2 + B.height/2){
   A.shapeColor = "Blue";
   B.shapeColor = "Blue";
}
else {
   A.shapeColor = "Red";
   B.shapeColor = "Green";

}

}

