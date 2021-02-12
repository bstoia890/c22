const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
world=engine.world
var options={
  isStatic:true

}
ground=Bodies.rectangle(200,390,200,20,options);
var ballOptions={
  restitution:1
}
ball=Bodies.circle(200,100,20,ballOptions);
World.add(world,ball);
World.add(world,ground);

}

function draw() {

  background("black");  
Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}