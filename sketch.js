var rectangle;
function setup() {
  createCanvas(400,400);
  rectangle=createSprite(197,42,57,49)
}

function draw() 
{
  background("blue");
  if(keyIsDown(UP_ARROW)){
    rectangle.position.y=rectangle.position.y-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    rectangle.position.y=rectangle.position.y+5;
  }
  if(keyIsDown(LEFT_ARROW)){
    rectangle.position.x=rectangle.position.x-5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    rectangle.position.x=rectangle.position.x+5;
  }
  drawSprites();

}




