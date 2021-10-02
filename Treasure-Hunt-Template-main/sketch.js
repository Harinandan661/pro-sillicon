var tony,terrorist,ground,Iground

function preload(){
  captain_running=loadAnimation("jog.png","sprint.png","run.png")
  groundI=loadImage("Ground.jpg")
  mandarin=loadImage("Mandarin.png")
  obstacle1=loadImage("obstacle.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  
}


function setup(){
  createCanvas(1280,660);
  ground=createSprite(500,500,900,10);
  ground.addImage(groundI)
  ground.scale=4.7  
  tony=createSprite(550,660,10,10);
  tony.addAnimation("running",captain_running)
  tony.scale=0.75
  terrorist=createSprite(150,550,30,30);
  terrorist.addImage(mandarin)
  terrorist.scale=0.5
  Iground=createSprite(500,660,900,10);
  Iground.visible=true

}



function draw(){
 background(0);
 ground.velocityX=-3;
 if(ground.x<475){
    ground.x=500 
 }
 if(keyDown("space")){
   tony.velocityY=tony.velocityY-8
 }
 tony.velocityY = tony.velocityY + 1.8
 tony.collide(Iground)
 spawnObs()
 drawSprites();
}
function spawnObs(){
  if(frameCount % 165 === 0) {
    var obstacle = createSprite(900,600,50,50);
    obstacle.velocityX = -5
    var randy= Math.round(random(1,4));
     


    if(randy===1){
    obstacle.addImage(obstacle1);
    obstacle.scale=0.5
   }
   else if(randy===2){
    obstacle.addImage(obstacle2);
    obstacle.scale=0.5
   }
   else if(randy===3){
    obstacle.addImage(obstacle3);
    obstacle.scale=0.5
   }
   else if(randy===4){
    obstacle.addImage(obstacle4);
    obstacle.scale=0.5
   }

  }
}