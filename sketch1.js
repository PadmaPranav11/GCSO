
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed=190
  weight=1000;

  car=createSprite(50,200,50,50);

  car.velocityX = speed;
  car.shapeColor="white"

  wall=createSprite(1200,200,60, height/2)
  wall.shapeColor="grey"
}

function draw() {
  background(0);
  
  if(speed=190)
  {
    car.velocityX=0
    var deformation=0.5 * weight* speed* speed/22509;
    if(deformation>180){
     car.shapeColor="red"
    }
   // if(deformation<180 && deformation>100) {
    //  car.shapeColor="yellow"
    //7}
    //if(deformation<100){
      //car.shapeColor="green"
   // }
    
  }



  drawSprites();
}