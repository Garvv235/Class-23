const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(180,100,50,25);
    box2 = new Box(200,200,50,25);
    ground1 = new Ground(200,350,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();    
    box2.display();
    ground1.display();
}