const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint




function preload() {
//preload the images here

}

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
    world = engine.world;
  // create sprites here
  ground= new Ground(500,700,1000,20)
o1 = new Obstacle(900,650)
h1=new Hero(500,400,50,50);
r1=new Rope(h1.body,{x:200,y:300})
console.log(o1);

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
o1.display();
h1.display();
}

