//created engine , a empty world and some bodies
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
// created a variable
var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    // made ground isstatic
    var ground_options ={
        isStatic: true
    }
    // made the ball to bounceoff
    var Ball ={
        restitution: 1.0
    }
    // created the ground
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    // created the ball
    ball = Bodies.circle(200,100,20,Ball);
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    // made a block to come to the centre 
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    //made the circle to come at the centre 
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}