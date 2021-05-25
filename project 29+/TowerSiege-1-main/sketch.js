const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,600,20,10);
    

    
    slingshot = new SlingShot(bird.body,{x:200, y:60});
}
function draw(){
    
    Engine.update(engine);
   
    ground.display();
    
    slingshot.display();    
}
