let ground;
let lander;
var lander_img;
var bg_img;
var Platform, base;


var vx = 0;
var g = 0.08;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  Platform = loadImage("platforam.jpg");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  base = createSprite(400,650,50,50);
  base.addImage(Platform);
  base.visible = false;
  
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();


  

  //fall down
  vy +=g;
  lander.position.y+=vy;

  if(keyDown(UP_ARROW))
  {
    lander.velocityY = -5;
  }

  if(keyDown(RIGHT_ARROW))
  {
    lander.velocityX = 5;
  }

  if(keyDown(LEFT_ARROW))
  {
    lander.velocityX = -5;
  }
  if(keyDown(DOWN_ARROW))
  {
    lander.velocityY = 5;
  }

  if(lander.isTouching(base))
  {
    lander.position.y = 0;
  }

  drawSprites();
}


