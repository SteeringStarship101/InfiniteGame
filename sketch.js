var player,playerImg;
var obstacle,obstacleImg;
var road,roadImg;

var Play = 1;
var End = 0;
var Gamestate = Play;

 var obstacleGroup;
 var score = 0;

var gameover,gameoverImg;






function preload(){
roadImg = loadImage("DDD.png");
  obstacleImg = loadImage("stone.png");
  playerImg = loadImage("ghost-jumping.png");
  gameoverImg = loadImage("Gameover.png");
}

function setup() {
 createCanvas(600,600)
  road = createSprite(200,300,100,100);
  road.addImage(roadImg);
  road.scale = 1.5;
  road.velocityY =5;
  
  player = createSprite(300,250,505,15)
  player.addImage(playerImg);
  player.scale = 0.5;
  
  gameover = createSprite(200,200,1000,1000);
  gameover.addImage(gameoverImg);
  gameover.visible = false;
  gameover.scale = 100;
  
  obstacleGroup = new Group();
  
}

function draw() {
  background("white")
  
 
 if(Gamestate===Play){
    if(road.y>100){
    road.y = 0
}
  if(keyDown("a")){
    player.x = player.x-5 ;
  }
  
  if(keyDown("d")){
    player.x = player.x+5;
  }
   
   score = score+Math.round(getFrameRate()/60);
   
    spawnObstacle();
   if(obstacleGroup.isTouching(player)){
     Gamestate = End;
   }
 }
  if(Gamestate===End){
    gameover.visible = true;
  }
 
  
  console.log(player.x);
 drawSprites();
  textSize(30)
  stroke("red")
  text("score:"+score,450,100)
  
}
function spawnObstacle(){
  
  if(frameCount%100===0){
    obstacle = createSprite(200,100,50,50);
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.25;
    obstacle.velocityY = 5;
    obstacle.x = Math.round(random(100,400));
    obstacleGroup.add(obstacle);
  }
}


