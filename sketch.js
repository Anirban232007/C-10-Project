var seaImg
var sea
var ship,ship_moving
function preload(){
seaImg=loadImage("sea.png")
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  sea=createSprite(200,200)
  createCanvas(2920,960);
  sea.addImage("seaImg",seaImg)
  sea.scale=1.5
  ship=createSprite(500,500)
  ship.addAnimation("moving",ship_moving)
}

function draw() {
 sea.velocityX=-10
 console.log(sea.x )
 if (sea.x===-2400){
   sea.x=0
 }
 drawSprites()
}