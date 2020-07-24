
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ground,roofObject;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,780,800,30);
	roofObject = new Ground(400,100,600,20);
	bobObject1 = new Bob(250,450,20);
	bobObject2 = new Bob(300,450,20);
	bobObject3 = new Bob(350,450,20);
	bobObject4 = new Bob(400,450,20);
	bobObject5 = new Bob(450,450,20);
	rope1 = new Rope(bobObject1.body,roofObject.body,-100,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-50,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,0,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,50,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,100,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ground.display();
  
  drawSprites();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bobObject5.body, {x: mouseX , y: mouseY});
    //}
}



