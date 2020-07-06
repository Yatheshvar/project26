const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box(200,200,20,20);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  box.display();

}