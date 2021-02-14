const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;

function setup(){
    canvas = createCanvas(windowWidth/2,windoHeight/1.5);
    engine=Engine.create();
    world=engine.world;

    bob1 = new Pendulum(200,200,30,30)
}

function draw(){
    background(0)
    Engine.update(engine);
    bob1.display();
}