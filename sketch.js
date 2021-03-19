
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;



var survivalTime=0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 400);

   bananaGroup=createGroup();
   stoneGroup=createGroup();
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
}



function draw() {
    background(225);

    spawnObstace()
  
    spawnBanana()

  if (ground.x<0){
      ground.x=ground.width/2;
      }
  
  if (keyDown("space")){
    monkey.velocityY=-12;
  }
 monkey.velocityY=monkey.velocityY+1;
  
  monkey.collide(ground);

  drawSprites();
    text("Score: "+ score, 500,+50);
  
  stroke("white");
  textSize(20);
  fill("white");
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,100,50);
}
 

function spawnBanana() {
  
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,200,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(150,200))
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    //assign lifetime to the variable
    banana.lifetime = 134;
    
    
    banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    
    
    bananaGroup.add(banana);
    }
 }

function spawnObstace() {
  
  if (frameCount % 100 === 0) {
    var obstace = createSprite(600,340,40,10);
    obstace.addImage(obstaceImage)
   
    obstace.scale = 0.1;
    obstace.velocityX = -3;
    
    //assign lifetime to the variable
    obstace.lifetime = 134;

    
    stoneGroup.add(obstace);
    }
 }


