const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var pig;
var Log1;

var box3;
var box4;
var Log2;
var pig2;

var box5, Log3, Log4;

var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    //Ground floor of the building.
    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig = new Pig(810, 350,25,25);
    Log1 = new Log(810,260,300,PI/2);

    //First floor of the building.

    box3 = new Box(700,250,70,70);
    box4 = new Box(920,240,70,70);
    Log2 = new Log(810,180,300,PI/2);
    pig2 = new Pig(810,220,25,25);

    //Roof of the building.


    box5 = new Box(810,160,70,70);
    Log3 = new Log(870,120,150,-PI/7);
    Log4 = new Log(760,120,150,PI/7);

    //For making a bird.

    bird = new Bird(100,100,20,20);
}

function draw(){
    background("cyan");
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    console.log(box3.body.position.x);
    console.log(box3.body.position.y);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    Log1.display();

    box3.display();
    box4.display();
    Log2.display();
    pig2.display();

    box5.display();
    Log3.display();
    Log4.display();

    bird.display();
}