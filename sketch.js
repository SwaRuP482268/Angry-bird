const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2,log1,log,log3,log4;
var ABird;


function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,550,50,50);
    box2 = new Box(450,550,50,50);
    box3 = new Box(300,490,50,50);
    box4 = new Box(450,490,50,50);
    box5 = new Box(370,430,50,50);
    
    ground = new Ground(400,height,800,20);

    pig1 = new PIG(370,550);
    pig2 = new PIG(370,490);

    log1 = new LOG(377,500,210,PI/2); 
    log =  new LOG(377,440,210,PI/2); 
    log3 = new LOG(330,430,100,PI/4); 
    log4 = new LOG(400,430,100,-PI/7); 

    ABird = new BIRD(50,50);


}

function draw(){
    background(0);
    
    Engine.update(engine);
    
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();

    log1.display();
    log.display();
    log3.display();
    log4.display();

    ABird.display();
   
}