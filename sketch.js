const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Pyramid 1
var block1, block2;
var block3, block4;
var block5, block6;
var block7;
var block8, block9;
var block10, block11;
var block12;
var block13, block14;
var block15;
var block16;

//Pyramid 2
var block17, block18;
var block19, block20;
var block21, block22;
var block23, block24;
var block25;

//Grounds
var ground1;
var ground2;

var shooter1;
var contraint1;
var gameState = "onSling";

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  //Pyramid 1
  block1 = new Block(350, 235, 25, 40);
  block2 = new Block(330, 235, 25, 40);
  block3 = new Block(320, 235, 25, 40);
  block4 = new Block(300, 235, 25, 40);
  block5 = new Block(280, 235, 25, 40);
  block6 = new Block(260, 235, 25, 40);
  block7 = new Block(240, 235, 25, 40);
  block8 = new Block(250, 200, 25, 40);
  block9 = new Block(275, 200, 25, 40);
  block10 = new Block(300, 200, 25, 40);
  block11 = new Block(325, 200, 25, 40);
  block12 = new Block(350, 200, 25, 40);
  block13 = new Block(275, 165, 25, 40);
  block14 = new Block(300, 165, 25, 40);
  block15 = new Block(325, 165, 25, 40);
  block16 = new Block(300, 130, 25, 40);

  //Pyramid 2
  block17 = new Block(550, 100, 25, 40);
  block18 = new Block(575, 100, 25, 40);
  block19 = new Block(600, 100, 25, 40);
  block20 = new Block(625, 100, 25, 40);
  block21 = new Block(650, 100, 25, 40);
  block22 = new Block(575, 65, 25, 40);
  block23 = new Block(600, 65, 25, 40);
  block24 = new Block(625, 65, 25, 40);
  block25 = new Block(600, 30, 25, 40);

  //Grounds
  ground1 = new Ground(300, 250, 225, 20);
  ground2 = new Ground(600, 160, 160, 20);

  shooter1 = new Shooter(100, 150, 40, 40);
  constraint1 = new Constraint1(shooter1.body, {x:100, y:150})

}

function draw() {
  background(255,255,255);
Engine.update(engine);
//Pyramid 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  //Pyramid 2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  //Grounds
  ground1.display();
  ground2.display();

  shooter1.display();
  constraint1.display();
}
function mouseDragged(){
  if(gameState !== "launched"){
  Matter.Body.setPosition(shooter1.body, {x:mouseX, y:mouseY})
  }
}

function mouseReleased(){
  constraint1.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
constraint1.attach(shooter1.body);
gameState = "onSling";
  }
}