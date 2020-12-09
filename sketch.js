var gameState="intro";

function preload(){
  c=loadImage("Cheese.png");
  m=loadAnimation("Mouse1.png","Mouse2.png");
  i=loadImage("Starting.png");
}


function setup() {
  createCanvas(800,400);

c1=createSprite(400, 200, 30, 30);
c1.addImage(c);
c2=createSprite(300, 300, 30, 30);
c2.addImage(c);
c3=createSprite(250, 250, 30, 30);
c3.addImage(c);
c4=createSprite(240, 280, 30, 30);
c4.addImage(c);
c5=createSprite(470, 270, 30, 30);
c5.addImage(c);
c6=createSprite(380, 536, 30, 30);
c6.addImage(c);
c7=createSprite(731, 500, 30, 30);
c7.addImage(c);

c8=createSprite(300, 480, 30, 30);
c8.addImage(c);
c9=createSprite(290, 180, 30, 30);
c9.addImage(c);
c10=createSprite(900, 800, 30, 30);
c10.addImage(c);
c11=createSprite(400, 200, 30, 30);
c11.addImage(c);
c12=createSprite(400, 200, 30, 30);
c12.addImage(c);
c13=createSprite(400, 200, 30, 30);
c13.addImage(c);
c14=createSprite(400, 200, 30, 30);
c14.addImage(c);
c15=createSprite(400, 200, 30, 30);
c15.addImage(c);
c16=createSprite(400, 200, 30, 30);
c16.addImage(c);
c17=createSprite(400, 200, 30, 30);
c17.addImage(c);
c18=createSprite(400, 200, 30, 30);
c18.addImage(c);
c19=createSprite(400, 200, 30, 30);
c19.addImage(c);
c20=createSprite(400, 200, 30, 30);
c20.addImage(c);
c21=createSprite(400, 200, 30, 30);
c21.addImage(c);
c22=createSprite(400, 200, 30, 30);
c22.addImage(c);
c23=createSprite(400, 200, 30, 30);
c23.addImage(c);
c24=createSprite(400, 200, 30, 30);
c24.addImage(c);
c25=createSprite(400, 200, 30, 30);
c25.addImage(c);
c26=createSprite(400, 200, 30, 30);
c26.addImage(c);


}

function draw() {
  background(0);  

  if(gameState==="intro"){
    introLevel();
  }

  if(gameState==="level1"){
  level1();
  }

  drawSprites();
}

function introLevel(){
  c1.visible=false;
  c2.visible=false;
  c3.visible=false;
  c4.visible=false;
  c5.visible=false;
  c6.visible=false;
  c7.visible=false;
  c8.visible=false;
  c9.visible=false;
  c10.visible=false;
  
  c11.visible=false;
  c12.visible=false;
  c13.visible=false;
  c14.visible=false;
  c15.visible=false;
  c16.visible=false;
  c17.visible=false;
  c18.visible=false;
  c19.visible=false;
  c20.visible=false;
  
  c21.visible=false;
  c22.visible=false;
  c23.visible=false;
  c24.visible=false;
  c25.visible=false;
  c26.visible=false;
  
image(i,100,100);

textSize(20);
stroke("yellow");

strokeWeight(5);
text("Help the Mouse eat as much cheese as possible",350,50);
text("Press Space to Start",450,250);

if(keyDown("space")){
  gameState="level1";
}
}

function level1(){

  c1.visible=true;
  c2.visible=true;
  c3.visible=true;
  c4.visible=true;
  c5.visible=true;
  c6.visible=true;
  c7.visible=true;
  c8.visible=true;
  c9.visible=true;
  c10.visible=true;
  
  c11.visible=true;
  c12.visible=true;
  c13.visible=true;
  c14.visible=true;
  c15.visible=true;
  c16.visible=true;
  c17.visible=true;
  c18.visible=true;
  c19.visible=true;
  c20.visible=true;
  
  c21.visible=true;
  c22.visible=true;
  c23.visible=true;
  c24.visible=true;
  c25.visible=true;
  c26.visible=true;
}