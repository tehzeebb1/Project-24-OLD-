
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var sideL, sideR, bottem, ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ground = createSprite(800, 630, 1600, 10);
	 ball = new Paper(200, 450, 40);

	sideL = createSprite(1000, 500, 20, 70);
	bottem = createSprite(1060, 525, 130, 20);
	sideR = createSprite(1120, 500, 20, 70);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

ball.display();
sideL.display();
bottem.display();
sideR.display();
ground.display();

keyPressed();
  drawSprites();
 
}

function keyPressed()
{
if (keyCode === UP_ARROW)
{
	Matter.Body.applyForce(paperObject.body,paperObject.body.postion,{x:85, y:-85})
}
}

