var fixed,moving;
var moving;
var object1,object2,object3,object4;



function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="red";
  fixed.debug=true;

  moving=createSprite(200,200,70,50);
  moving.shapeColor="red";
  moving.debug=true;

  object1=createSprite(100,100,50,50);
  object1.shapeColor="green";

  object2=createSprite(200,100,50,50);
  object2.shapeColor="green";

  object3=createSprite(300,100,50,50);
  object3.shapeColor="green";

  object4=createSprite(400,100,50,50);
  object4.shapeColor="green";
}

function draw() {
  background(0);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  
 

  if (isTouching(moving,object1)){
    moving.shapeColor="red";
    object1.shapeColor="red";
  }
  else{
    moving.shapeColor="green";
    object1.shapeColor="green";
  }
  if (isTouching(moving,object2)){
    moving.shapeColor="blue";
    object2.shapeColor="blue";
  }
  else{
    moving.shapeColor="green";
    object2.shapeColor="green";
  }
  drawSprites();
}
function isTouching(game1,game2){
  if (game1.x-game2.x<game2.width/2+game1.width/2
    && game2.x-game1.x<game2.width/2+game1.width/2
    && game1.y-game2.y<game2.height/2+game1.height/2
    && game2.y-game1.y<game2.height/2+game1.height/2){
    return true;
  }
  else{
    return false;
  }
}