const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola;
var parede;
let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }
  var bola_options ={
    restitution :0.95,
    frictionAir: 0.01,
  }
bola = Bodies.circle(300,20,20,bola_options);
  World.add(world,bola);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  parede = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,parede);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);
 ellipse(bola.position.x,bola.position.y,20);
 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  rect(parede.position.x,parede.position.y,200,20);
}

