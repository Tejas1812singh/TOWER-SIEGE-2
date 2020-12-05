const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine,world
var ball,ground,stand1,stand2,slingshot,polygonimage,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9,blocks10,launcher
//engine world ,holder,ball,ground,stand1,stand2,slingshot,polygonimage,function preload,create block 1 to 16
function preload(){
  polygon_img=loadImage("polygon.png");
}



function setup() {
 
  
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
 stand1 = new Stand(390,300,250,20);
 stand2 = new Stand(700,200,200,20);
 
 
  block1 = new Block(300,275,30,40)
  block2 = new Block(330,275,30,40)
  block3 =new Block(360,275,30,40)
  block4 =new Block(390,275,30,40)
  block5 = new Block(420,275,30,40)
  block6 =new Block(450,275,30,40)
  block7 = new Block(480,275,30,40)
  block8 =new Block(330,235,30,40)
  block9 = new Block(360,235,30,40)
  block10 =new Block(390,235,30,40)
  block11 =new Block(420,235,30,40)
  block12 =new Block(450,235,30,40)
  block13 =new Block(360,195,30,40)
  block14 =new Block(390,195,30,40)
  block15 = new Block(420,195,30,40)
  block16 = new Block(390,155,30,40)

  blocks1 = new Block(640,175,30,40)
  blocks2 = new Block(670,175,30,40)
  blocks3 =new Block(700,175,30,40)
  blocks4 =new Block(730,175,30,40)
  blocks5 = new Block(760,175,30,40)
  blocks6 =new Block(670,135,30,40)
  blocks7 = new Block(700,135,30,40)
  blocks8 =new Block(730,135,30,40)
  blocks9 = new Block(700,95,30,40)
  blocks10 =new Block(730,95,30,40)
 
ball = Bodies.circle(50,200,20)
World.add(world,ball)

launcher = new Slingshot(this.ball,{x:100,y:200})

}

function draw() {
  background("lightblue");  
textSize(24)
fill("yellow")
text("Drag the hexagonal stone and release it, to launch it towards the blocks",50,50)
textSize(15)
text("Press space to play again.",600,300)
strokeWeight(2)
stroke(15)
fill("cyan")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("red")
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("blue")
block13.display();
block14.display();
block15.display();

block16.display();
fill("green")
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
fill("black")
blocks6.display();
blocks7.display();
blocks8.display();
blocks9.display();
fill("orange")
blocks10.display();
launcher.display();


ground.display();
stand1.display();
stand2.display();
imageMode(CENTER)
image(polygon_img,ball.position.x,ball.position.y,40,40)
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.fly();
}
function keyPressed() {
  if( keyCode===32){
    launcher.attach(this.ball)
  }
}