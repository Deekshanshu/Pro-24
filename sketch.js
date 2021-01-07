
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ground
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin(width/2,height-50 ,200,20)
	box2 = new Dustbin(310,height-100 ,20,100)
	box3 = new Dustbin(490,height-100 ,20,100)

	ground = new Ground(600,height,1200,20)

	ball = new Paper(200,200,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
 
  ground.display();

  ball.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}



